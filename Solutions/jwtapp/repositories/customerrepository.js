var connection = require("../config/db");

exports.insertCustomer=(firstname, lastname,email,contactNo, city,result)=>{
    var sql = "insert into customersprofile (firstname, lastname,email,contactNo, city) values (?,?,?,?,?)";
    connection.query(sql, [firstname, lastname,email,contactNo, city],result);
};

exports.deleteCustomer=(id,result)=>{
    var sql = "delete from customersprofile where id=?";
    connection.query(sql, [id],result);
};

exports.getAllCustomers=(result)=>{
    var sql = "select * from customersprofile";
    connection.query(sql, result);
    // console.log("hello 3");
};

exports.updateCustomer=(firstname, lastname,email,contactNo, city,id,result)=>{
    var sql = "update customersprofile set firstname=?, lastname=?,email=?,contactNo=?, city=? where id=?";
    connection.query(sql, [firstname, lastname,email,contactNo, city,id],result);
};