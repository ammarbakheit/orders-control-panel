const bcrypt = require("bcrypt");

exports.passwordHashing = async (password) => {
    const saltFactor = 10;
    const salt = await bcrypt.genSalt(saltFactor);

    const hash = await bcrypt.hashSync(password, salt);

    return hash;
}
