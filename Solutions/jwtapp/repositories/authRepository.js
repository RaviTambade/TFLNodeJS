var connection = require("../config/db");


exports.authenticate = (username, password, result) => {

    const sql =
        "SELECT * FROM users WHERE username=? AND password=?";

    connection.query(
        sql,
        [username, password],
        result
    );
};
