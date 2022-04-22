const { yup, object, string } = require("yup");


exports.createProductSchema = object({
    body: object({
        name: string().required("Product Name is required"),
        price: string().required("product Price is required"),

    })
});
exports.updateProductSchema = object({
    body: object({
        name: string().required("Product Name is required"),
        price: string().required("product Price is required"),

    }),
    params: object({
        productuuid: string().required("Product uuid is required"),

    })
});

exports.getSingleProductSchema = object({
    params: object({
        productuuid: string().required("Product uuid is required"),

    })
});