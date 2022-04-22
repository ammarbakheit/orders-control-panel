const { yup, object, string } = require("yup");


exports.createUserSchema = object({
    body: object({
        name: string().required("Name is required"),
        password: string().required("Password is required"),
        email: string()
            .email("Must be a valid email")
            .required("Email is required"),
    })
});