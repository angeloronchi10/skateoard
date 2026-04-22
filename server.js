const express = require("express");

const app = express();

app.get("/", function(req,res){
res.sendFile(__dirname + "/index.html");
});

app.get("/chi-siamo", function(req,res){
res.sendFile(__dirname + "/chi_siamo.html");
});

app.get("/cosa-facciamo", function(req,res){
res.sendFile(__dirname + "/cosa_facciamo.html");
});

app.get("/modulo", function(req,res){
res.sendFile(__dirname + "/modulo.html");
});

app.listen(3000,function(){
console.log("Server avviato");
});
