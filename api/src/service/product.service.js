const { prisma } = require("../db/connect")


exports.getAllProducts = async () => {
    try {
        const allProducts = await prisma.product.findMany({});

        return allProducts;
    } catch (e) {
        console.log(e);

        return e;
    }
}

exports.getProduct = async (input) => {
    try {
        const product = await prisma.product.findFirst({
            where: {
                uuid: input.productuuid
            }
        });

        return product;
    } catch (e) {
        console.log(e);

        return e;
    }
}

exports.createProduct = async (input) => {
    try {
        const newProduct = await prisma.product.create({
            data: {
                uuid: input.uuid,
                name: input.name,
                price: input.price,
            }
        });

        return newProduct;
    } catch (e) {
        console.log(e);
        return e;
    }
}

exports.updateProduct = async (input) => {
    try {
        const newProduct = await prisma.product.update({
            where: {
                uuid: input.uuid
            },
            data: {
                name: input.name,
                price: input.price,
            }
        });

        return newProduct;
    } catch (e) {
        console.log(e);
        return e;
    }
}