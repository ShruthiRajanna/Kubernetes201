var connection = require('./../app');
module.exports.register=function(req,res){
    var users={
        "username":req.body.username,
        "password":req.body.password
    }
    connection.query('INSERT INTO userdetails SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            message:'there are some error with query'
        })
      }else{
          res.json({
            message:'user registered sucessfully'
        })
      }
    });
}