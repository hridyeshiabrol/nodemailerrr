var express =require("express");
var path=require("path");

var app=express();

app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));

app.get("/",(req,resp)=>{
    var fullPath=path.join(__dirname,"public","index.html");
    resp.sendFile(fullPath);
});

var userRouter=require("./routers/routeUser");
app.use("/user",userRouter);

app.listen(8082,()=>{
    console.log("Server Started");
})
