


const authRepo = require('../repositories/authRepository');

exports.authenticate = (username, password, result) => {

    authRepo.authenticate(
        username,
        password,
        result
    );
};