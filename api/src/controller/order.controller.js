const { nanoid } = require("nanoid");
const { createOrder, getAllOrders, getOrder } = require("../service/order.service");



exports.createOrdertHandler = async (req, res, next) => {
    try {
        let totalPrice = 0;
        req.body.products.map(p => totalPrice += parseFloat(p.price));

        const newOrder = await createOrder({
            uuid: nanoid(),
            useruuid: res.locals.user.uuid,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            total: totalPrice,
            products: req.body.products
        });

        return res.status(200).send(newOrder);

    } catch (e) {
        console.log(e);

        res.status(404).send(e)
    }
}

exports.getAllOrdersHandler = async (req, res, next) => {
    try {
        const orders = await getAllOrders();

        return res.status(200).send(orders);
    } catch (e) {
        console.log(e);

        return res.status(404).send(e);
    }
}

exports.getOrderHandler = async (req, res, next) => {
    try {
        const order = await getOrder({ uuid: req.params['orderuuid'] });


        return res.status(200).send(order);

    } catch (e) {
        console.log(e);

        return res.status(404).send(e);
    }
}