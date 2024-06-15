const sql=require('../models/db')

exports.getAll=(req, res)=>{  
    let command="SELECT * FROM tasks";
    sql.query(command,(err, rows, fields)=>{
        res.send(rows);
    })
};

exports.insert=(req, res)=>{

};

exports.update=(req, res)=>{

};

exports.remove=(req, res)=>{

};