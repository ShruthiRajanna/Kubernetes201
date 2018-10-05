var connection = require('./../app');
module.exports.authenticate=function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    connection.query('SELECT * FROM userdetails WHERE username = ?',[username], function (error, results, fields) {
      if (error) {
          res.json({
            message:'there are some error with query'
            })
      }else{
        if(results.length >0){
            if(password==results[0].password){
                res.json({
                    message:'successfully authenticated'
                })
            }else{
                res.json({
                  status:false,
                  message:"Email and password does not match"
                 });
            }
         
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exits"
          });
        }
      }
    });
}