var connection = require("../config/db")

exports.insertFlower=(name , quantity , price,result)=>{
    sql= "insert into flowers (name , quantity , price) values (?,?,?)";
    connection.query(sql,[name , quantity , price],result)
}

exports.deleteFlower=(id,result)=>{
    sql="delete from flowers where id=(?)";
    connection.query(sql,[id],result);

}

exports.updateFlower=(name , quantity , price ,id,result)=>{
    sql="update flowers set name=?, quantity=?,price=? where id=?";
    connection.query(sql, [name, quantity, price, id],result);

}

exports.getAllFlowers=(result)=>{
    sql="select * from flowers";
    connection.query(sql, result);

}

