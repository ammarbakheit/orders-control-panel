const express = require('express'); //import express
const createUserSchema = require("./schema/user.schema").createUserSchema;
const validateRequest = require("./middleware/validateRequest").validateRequest;
const { createUserHandler, getAllUsersHandler } = require("./controller/user.controller");
const { createSessionSchema } = require("./schema/session.schema");
const { createSessionHandler, logoutSessionHandler, getSessionHandler } = require("./controller/session.controller");
const { requireUser } = require('./middleware/requireUser');
const { getAllProductHandler, createProductHandler, getProductHandler, updateProductHandler } = require('./controller/product.controller');
const { createProductSchema, getSingleProductSchema, updateProductSchema } = require('./schema/product.schema');
const { createOrderSchema, getOrderSchema } = require('./schema/order.schema');
const { createOrdertHandler, getAllOrdersHandler, getOrderHandler } = require('./controller/order.controller');

const router = express.Router();

// health check
router.get("/", (req, res, next) => {
    res.sendStatus(200)
});


// Users
router.post('/api/user', validateRequest(createUserSchema), createUserHandler)
router.post('/api/session', validateRequest(createSessionSchema), createSessionHandler);
router.get('/api/me', requireUser, getSessionHandler)
router.get('/api/me/all', getAllUsersHandler)
router.delete('/api/session', requireUser, logoutSessionHandler)

// Products
router.get('/api/product/all', getAllProductHandler)
router.get('/api/product/:productuuid', validateRequest(getSingleProductSchema), getProductHandler)
router.post('/api/product/', validateRequest(createProductSchema), createProductHandler)
router.put('/api/product/:productuuid', validateRequest(updateProductSchema), updateProductHandler)


// Orders
router.post('/api/order/', [validateRequest(createOrderSchema), requireUser], createOrdertHandler)
router.get('/api/order/all', getAllOrdersHandler)
router.get('/api/order/:orderuuid', validateRequest(getOrderSchema), getOrderHandler)


module.exports = router;