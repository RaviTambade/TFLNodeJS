const { validateToken } = require('../helpers/tokenHelper');

function verifyToken(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Token required"
        });
    }

    const token = authHeader.split(" ")[1];

    validateToken(token)
        .then((decoded) => {
            req.user = decoded;
            next();
        })
        .catch(() => {
            return res.status(403).json({
                message: "Invalid token"
            });
        });
}

module.exports = verifyToken;