var connection = require("../config/db");

exports.insertCredential=(username,password,resut)=>{
    var sql = "insert into credentials (username,password) values (?,?)";
    connection.query(sql, [username,password],resut);
};

exports.deleteCredential=(id,result)=>{
    var sql = "delete from credentials where id=?";
    connection.query(sql, [id],result);
};

exports.getAllCredentials=(result)=>{
    var sql = "select * from credentials";
    connection.query(sql, result);
    // console.log("hello 3");
};

exports.updateCredential=(username,password,id,result)=>{
    var sql = "update credentials set username=?, password=? where id=?";
    connection.query(sql, [username,password,id],result);
};