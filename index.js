var express=require("express");
var bodyParser=require('body-parser');
var http = require("http");
var app = express();

var authenticateController=require('./controllers/authenticate-controller.js');
var registerController=require('./controllers/register-controller.js');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/login",(req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/authenticate",(req, res) => {
    res.sendFile(__dirname + "/validation.html");
});

/* route to handle login and registration */
app.post('/login',registerController.register);
app.post('/authenticate',authenticateController.authenticate);
app.listen(8083);
