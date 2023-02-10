var http = require('http');
var url = require("url");
const express = require("express")
const querystring = require("querystring");


var app = express()
app.get('/',(req,res,next)=>{
    console.log("Hello");
    res.send("Hello");
} );
server.listen(8080);

