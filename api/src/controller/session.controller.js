const { sign } = require("../utils/jwt");
const { validatePassword } = require("../helpers/validatePassword");
const { createSession, createAccessToken, updateSession } = require("../service/session.service");

exports.createSessionHandler = async (req, res, next) => {
    // email & password validatio
    const user = await validatePassword(req.body);

    if (!user) return res.status(401).send("invalid email or password");

    // create a session 
    const userAgent = req.get("user-agent") || "";
    const sessionInput = { user, userAgent, valid: true };

    const session = await createSession(sessionInput);

    // create access token
    const accessToken = await createAccessToken({ user, session });
    // create refresh token
    const refreshToken = sign(session, { expiresIn: "1y" })

    // creating a cookie
    res.cookie("accessToken", accessToken, {
        maxAge: 900000, // 15 min
        httpOnly: true,
        domain: "localhost",
        path: "/",
        sameSite: "strict",
        secure: false,
    });
    res.cookie("refreshToken", refreshToken, {
        maxAge: 3.154e10, // 1 year
        httpOnly: true,
        domain: "localhost",
        path: "/",
        sameSite: "strict",
        secure: false,
    });

    // returning the access & the refresh tokens
    return res.send({ accessToken, refreshToken });
}

exports.logoutSessionHandler = async (req, res, next) => {
    const sessionuuid = req.user.session;

    await updateSession(sessionuuid);

    return res.sendStatus(200);


}

exports.getSessionHandler = async (req, res, next) => {
    try {
        const user = res.locals.user;

        return res.status(200).send(user);
    } catch (e) {

        return res.status(403).send({ message: "Un authorized" })
    }
}