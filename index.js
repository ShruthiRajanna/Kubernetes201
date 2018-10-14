var express=require("express");
var bodyParser=require('body-parser');
var http = require("http");

var morgan = require('morgan');
var winston = require('./config/winston');
var app = express();

var authenticateController=require('./controllers/authenticate-controller.js');
var registerController=require('./controllers/register-controller.js');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use(morgan('combined', { stream: winston.stream }));

app.get("/login",(req, res) => {
    winston.info(`${res.status || 200} - ${"success"} - ${req.method}`);
    res.sendFile(__dirname + "/index.html");
});

app.get("/authenticate",(req, res) => {
    winston.info(`${res.status || 200} - ${"success"} - ${req.method}`);
    res.sendFile(__dirname + "/validation.html");
});

/* route to handle login and registration */
app.post('/login',registerController.register);
app.post('/authenticate',authenticateController.authenticate);
app.listen(8083);
