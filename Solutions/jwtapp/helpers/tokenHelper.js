const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../package.json');

const SECRET_KEY = jwtConfig.secretKey;
const ACCESS_TOKEN_EXPIRY = jwtConfig.accessTokenExpiry;
const REFRESH_TOKEN_EXPIRY = jwtConfig.refreshTokenExpiry;

function generateAccessToken(user) {
    return jwt.sign(
        {
            id: user.id,
            username: user.username,
            role: user.role
        },
        SECRET_KEY,
        { expiresIn: ACCESS_TOKEN_EXPIRY }
    );
}

function generateRefreshToken(user) {
    return jwt.sign(
        {
            id: user.id,
            username: user.username,
            role: user.role,
            type: 'refresh'
        },
        SECRET_KEY,
        { expiresIn: REFRESH_TOKEN_EXPIRY }
    );
}

function validateToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(decoded);
        });
    });
}

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    validateToken
};
