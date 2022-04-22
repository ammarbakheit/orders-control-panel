const prisma = require("../db/connect").prisma;
const { nanoid } = require("nanoid");

exports.createUser = async (user) => {
    try {

        const uuid = nanoid();
        const newUser = await prisma.user.create({
            data: {
                ...user,
                uuid
            }
        })
        return newUser;
    } catch (e) {
        console.log(e);
        return e;
    }
}

exports.getAllUsers = async () => {
    try {
        const allUsers = await prisma.user.findMany({});

        return allUsers;
    } catch (e) {
        console.log(e);

        return e;
    }
}