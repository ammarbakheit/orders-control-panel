const { prisma } = require("../db/connect");
const { sign, decode } = require("../utils/jwt");
const { get } = require("lodash");

exports.createSession = async (input) => {
    try {
        const session = await prisma.session.create({
            data: {
                userAgent: input.userAgent,
                valid: input.valid,
                useruuid: input.user.uuid
            }
        });

        return session;
    } catch (e) {
        console.log(e);

        return e;
    }
}

exports.createAccessToken = async ({ user, session }) => {
    const accessToken = sign(
        { ...user, session: session.uuid },
        { expiresIn: "15m" } // 15 minutes
    )

    return accessToken;
}

exports.reIssueAccessToken = async ({ refreshToken }) => {
    const { decoded } = decode(refreshToken);


    if (!decoded || !decoded.uuid) return false;

    // get the session
    const session = await prisma.session.findFirst({
        where: {
            uuid: get(decoded, "uuid"),
        },
    });
    // make sure the session is still valid
    if (!session || !session?.valid) return false;


    // get the user
    const user = await prisma.user.findFirst({
        where: {
            uuid: session.userId,
        },
    });

    if (!user) return false;
    const accessToken = exports.createAccessToken({ user, session });

    return accessToken;
}

exports.updateSession = async (uuid) => {
    const updatedSession = await prisma.session.update({
        where: {
            uuid: uuid,
        },
        data: {
            valid: false,
        },
    });
    return updatedSession;
}