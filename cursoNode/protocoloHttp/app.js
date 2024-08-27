var http = require('http')

http.createServer(function(req, res){
    res.end("Seja bem-vindo!")
}).listen(8081)

console.log("Server online")