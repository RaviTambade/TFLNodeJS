function isAdmin(req, res, next) {

    if (req.user.role !== "admin") {

        return res.status(403).json({
            message: "Only admin can perform this operation"
        });
    }

    next();
}

module.exports = isAdmin;