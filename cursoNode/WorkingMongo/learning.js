const mongoose = require('mongoose')

//CONFIGURANDO O MONGOOSE
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/working-mongo", 
    {useMongoClient: true})
.then(()=> {
    console.log("Conectado ao MongoDB com sucesso!")
})
.catch((erro)=>{
    console.log("Houve um erro ao se conectar ao MongoDB: "+erro)
})