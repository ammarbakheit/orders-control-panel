const { getAllUsers } = require("../service/user.service");

const passwordHashing = require("../helpers/passwordHashing").passwordHashing;
const createUser = require("../service/user.service").createUser;

exports.createUserHandler = async (req, res, next) => {

    try {
        const hashedPassword = await passwordHashing(req.body.password);

        const user = await createUser({
            ...req.body,
            password: hashedPassword
        });

        return res.status(200).send(user);
    } catch (e) {
        console.log(e);

        res.status(500).send(e);
    }
}

exports.getAllUsersHandler = async (req, res, next) => {
    try {
        const users = await getAllUsers();

        return res.status(200).send(users);
    } catch (e) {
        console.log(e);

        return res.status(404).send(e);
    }
}