var express = require("express");
var app		= express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));


app.get("/", function(req,res){
	res.render("home");
});

app.get("/calculator", function(req,res){
	res.render("calculator");
});

app.listen(process.env.PORT || 3000, function(){
	console.log("Calculator running..");
});