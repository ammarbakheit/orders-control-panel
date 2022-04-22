const { reIssueAccessToken } = require("../service/session.service");
const { decode } = require("../utils/jwt");
const { get } = require("lodash");

exports.deserializeUser = async (req, res, next) => {
    const accessToken = get(req, "cookies.accessToken") || req.headers.authorization.replace("Bearer ", "");

    const refreshToken = get(req, "cookies.refreshToken") || req.headers["x-refresh"];


    if (!accessToken) return next();

    const { decoded, expired } = decode(accessToken);

    // attach the user to the request object
    if (decoded) {
        req.user = decoded;

        return next();
    }


    // reIssue access token
    if (expired && refreshToken) {
        const newAcessToken = await reIssueAccessToken({ refreshToken });


        if (newAcessToken) {
            // attaching the new access token to the cookies
            res.cookie("accessToken", newAcessToken, {
                maxAge: 900000, // 15 min
                httpOnly: true,
                domain: "localhost",
                path: "/",
                sameSite: "strict",
                secure: false,
            });

            // attaching the new access token to res header
            res.setHeader("x-access-token", newAcessToken);
            // ataching user to req object
            const { decoded } = decode(newAcessToken);

            req.user = decoded;
        }

        return next();
    }
    return next();
}