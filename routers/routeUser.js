var express=require("express");
var path=require("path");

var mysql=require("mysql");
var config={
    host:"localhost",
    user:"root",
    password:"",
    database:"mernpractice"
}
var dbcon=mysql.createConnection(config);
    dbcon.connect(function(err){
        if(err)
            console.log(err.message);
        else
            console.log("Connected Successfullllyyyy");

    });


var app=express.Router();

app.get("/signup",(req,resp)=>{
    var fullPath=path.join(__dirname,"..","public","message.html");
    resp.sendFile(fullPath);
});



var nodemailer = require('nodemailer');
var bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({ extended:true }));
app.use(express.static("public"));

app.get("/nodemailer",(req,resp)=>{
    console.log(req.query.msg);
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: 'cse.18bcs2401@gmail.com',
        pass: '@Hridyeshi25'
      }
    });
    
    var mailOptions = {
      from: 'cse.18bcs2401@gmail.com',
      to: 'cse.18bcs2401@gmail.com',
      subject: 'Sending Email using Node.js',
      text: req.query.msg
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } 
      else {
        console.log('Email sent: ' + info.response);
      }
    });
  resp.end("MAIL SENT");
  });


  
module.exports=app;

