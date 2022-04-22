
exports.requireUser = (req, res, next) => {
    const user = req.user;
    // console.log({ user });
    if (!user) return res.status(403).send({ error: "un authorized" });

    res.locals.user = user;
    return next();
}