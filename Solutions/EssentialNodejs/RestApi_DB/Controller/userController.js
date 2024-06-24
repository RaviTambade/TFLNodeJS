const sql=require('../models/db');
 
exports.getAll=(req,res)=>{
    var command = "select * from credentials";
    sql.query(command,(err,rows,fields)=>{
        var str=JSON.stringify(rows);
        res.send(str);
    });
}

exports.insert = (req, res) => {
    var userData=req.body;
  var command = "insert into credentials(email, password) values(?,?)";
  sql.query(command,[userData.email, userData.password], (err, rows, fields) => {
    var str = JSON.stringify(rows);
    res.send(str);
  });
};

exports.update = (req, res) => {
  const userData = req.body;
  const command = "UPDATE credentials SET password = ? WHERE email = ?";
  sql.query(command, [userData.password, userData.email], (err, results) => {
    if(err)
      {
        var str = JSON.stringify(err);
        res.send(str);

      }
  });
};

exports.delete = (req, res) => {
  var userData = req.body;
  var command = "delete from credentials where email= ?";
  sql.query(
    command,
    [userData.email],
    (err, rows, fields) => {
      var str = JSON.stringify(rows);
      res.send(str);
    }
  );
};