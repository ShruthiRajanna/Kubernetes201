// app.js
const mysql = require('mysql');
var logger = require('morgan');
//  winston = require('./config/winston');
// app.use(morgan('combined', { stream: winston.stream }));


// First you need to create a connection to the db
const con = mysql.createConnection({
  host: 'mysql.cha2qfcsucw4.us-east-1.rds.amazonaws.com',
  user: 'shruthi',
  password: 'Welcomeuser',
  database: 'testdb',
  port: '3306'
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

module.exports = con;