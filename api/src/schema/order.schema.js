const { yup, object, string, array } = require("yup");

exports.createOrderSchema = object({
    body: object({
        products: array().required("products  is required"),
        latitude: string().required("latitude is required"),
        longitude: string().required("longitude is required")
    })
});
exports.getOrderSchema = object({
    params: object({
        orderuuid: string().required("Order uuid  is required"),

    })
});