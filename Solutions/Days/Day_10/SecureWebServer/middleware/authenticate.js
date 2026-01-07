const jwt = require('jsonwebtoken');

const jwtSecretKey = "transflower_secret";

function authenticateToken(req, res, next) {

    const authHeader = req.header("Authorization");

    if (!authHeader) {
        return res.status(401).send("Authorization header missing");
    }

    // Expecting: Bearer <token>
    const parts = authHeader.split(" ");

    if (parts.length !== 2 || parts[0] !== "Bearer") {
        return res.status(400).send("Invalid Authorization header format");
    }

    const token = parts[1];

    jwt.verify(token, jwtSecretKey, (err, decoded) => {

        if (err) {
            console.error("Token verification error:", err);
            return res.status(403).send("Unauthorized request");
        }

        // Attach decoded token to request
        req.user = decoded;

        next(); // move to controller
    });
}

module.exports = authenticateToken;
