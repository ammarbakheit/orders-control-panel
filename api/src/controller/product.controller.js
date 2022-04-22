const { nanoid } = require("nanoid");
const { getAllProducts, createProduct, getProduct, updateProduct } = require("../service/product.service")


exports.getAllProductHandler = async (req, res, next) => {
    try {
        const products = await getAllProducts();

        return res.status(200).send(products);
    } catch (e) {
        console.log(e);

        return res.status(404).send(e);
    }
}

exports.getProductHandler = async (req, res, next) => {
    try {
        const product = await getProduct({ productuuid: req.params['productuuid'] });

        return res.status(200).send(product);

    } catch (e) {
        console.log(e);

        return res.status(404).send(e);
    }
}

exports.createProductHandler = async (req, res, next) => {
    try {
        const product = await createProduct({
            uuid: nanoid(),
            name: req.body.name,
            price: req.body.price
        });

        return res.status(200).send(product);

    } catch (e) {
        console.log(e);

        return res.status(403).send(e);
    }
}
exports.updateProductHandler = async (req, res, next) => {
    try {
        const updatedProduct = await updateProduct({
            uuid: req.params['productuuid'],
            name: req.body.name,
            price: req.body.price
        });

        return res.status(200).send(updatedProduct);

    } catch (e) {
        console.log(e);

        return res.status(403).send(e);
    }
}



