const express = require('express')
const app = express()

app.get("/", function(req, res){
    res.sendFile(__dirname + '/html/index.html')
})

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html")
})

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog!")
})

app.get("/ola/:nome/:cargo/:tech", function(req, res){
    res.send("<h1> Ola, " + req.params.nome+"</h1>" + 
        "<h2> Seu cargo: " + req.params.cargo + "</h2>" +
        "<h3> Voce esta programando em: " + req.params.tech + "</h3>")
})


app.listen(8081, function(){
    console.log("Server ON -> http://localhost:8081")
})