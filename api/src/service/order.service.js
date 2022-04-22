const { prisma } = require("../db/connect")

exports.createOrder = async (input) => {
    try {
        const order = await prisma.order.create({
            data: {
                uuid: input.uuid,
                useruuid: input.useruuid,
                latitude: input.latitude,
                longitude: input.longitude,
                total: input.total,
                products: {
                    create: [...input.products.map(p => {
                        return {
                            product: {
                                connect: {
                                    uuid: p.uuid
                                }
                            }
                        }
                    })]
                }
            }
        });

        return order;
    } catch (e) {
        console.log(e);
        return e;
    }
}

exports.getAllOrders = async () => {
    try {
        const allOrders = await prisma.order.findMany({
            include: {
                products: {
                    select: {
                        product: true
                    }
                },
                user: true
            }
        });

        return allOrders;
    } catch (e) {
        console.log(e);

        return e;
    }
}

exports.getOrder = async (input) => {
    try {
        const order = await prisma.order.findMany({
            where: {
                uuid: input.uuid
            },
            include: {
                products: {
                    select: {
                        product: true
                    }
                },
                user: true
            }
        });

        return order;
    } catch (e) {
        console.log(e);

        return e;
    }
}