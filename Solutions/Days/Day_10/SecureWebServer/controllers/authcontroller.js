const jwt = require('jsonwebtoken');

const jwtSecretKey = "transflower_secret";

exports.login = (req, res) => {

    const user = req.body;

    if (
        user.email === "ravi.tambade@transflower.in" &&
        user.password === "seed"
    ) {
        const payload = {
            email: user.email,
            time: new Date().toISOString()
        };

        const token = jwt.sign(payload, jwtSecretKey, { expiresIn: "1h" });

        console.log("JWT issued for:", payload.email);

        res.status(200).json({ token });
    } else {
        res.status(403).send("Invalid User");
    }
};
