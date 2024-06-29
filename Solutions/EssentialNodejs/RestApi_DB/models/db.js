const mysql=require('mysql2');

var conUrl={
    host:'localhost',
    user: 'root',
    password:'root123',
    database:'banking'
}
const connection=mysql.createConnection(conUrl);
connection.connect((err,rows,fields)=>{
    if(!err)
        {
            console.log("connection establish successfully");
        }
        else{
            console.log("connection not establish");
        }
});

module.exports=connection;