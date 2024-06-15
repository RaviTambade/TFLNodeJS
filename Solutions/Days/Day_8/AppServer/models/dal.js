//DRY : Don't Repeat your self
const sql=require('./db');
var getAll=function(){
    let command="SELECT * FROM tasks";
    sql.query(command,(err, rows, fields)=>{
        console.log(rows);
    })
};

var insert=function(){
    let command="INSERT INTO tasks() values()";
    sql.query(command,(err, rows, fields)=>{
        console.log(rows);
    })
}

var remove=function(id){
    let command="DLETE from tasks where takid="+id;
    sql.query(command,(err, rows, fields)=>{
        console.log(rows);
    })
}


getAll();