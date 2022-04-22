const { prisma } = require("../db/connect");
const bcrypt = require("bcrypt");


exports.validatePassword = async ({ email, password }) => {
    const user = await prisma.user.findFirst({
        where: {
            email: email,
        },
    });

    if (!user) {
        return false;
    }
    // comparing passwords
    const isValid = await bcrypt
        .compare(password, user.password)
        .catch((e) => false);

    if (!isValid) {
        return false;
    }

    return user;
}