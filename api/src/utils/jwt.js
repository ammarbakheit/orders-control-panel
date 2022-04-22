const jwt = require("jsonwebtoken");

const privateKey = "SECRET";


exports.sign = (object, options) => {
    return jwt.sign(object, privateKey, options);
}

exports.decode = (token) => {
    try {
        const decoded = jwt.verify(token, privateKey);

        return { valid: true, expired: false, decoded };
    } catch (e) {

        return {
            valid: false,
            expired: "jwt Expired",
            decoded: null
        }
    }
}