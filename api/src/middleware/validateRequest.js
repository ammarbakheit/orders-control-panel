

exports.validateRequest = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validate({
                body: req.body,
                query: req.query,
                params: req.params,
            });

            return next();
        } catch (e) {
            console.log(error);

            return res.status(400).send(error.errors);
        }
    }
}