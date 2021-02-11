//모듈
const express = require("express");
const app = express();


//라우팅
const home = require("./routes/home");

//앱 세팅
app.set("views","./views")
app.set("view engine", "ejs")

app.get("/", function(req,res){
    res.render("home/index")
});

app.get("/login",(req,res)=>{
    res.render("home/login")
})


app.use("/", home); //use => 미들 웨어를 등록해주는 메서드입니다.

module.exports = app