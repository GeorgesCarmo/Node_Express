const mongoose = require('mongoose')

//CONFIGURANDO O MONGOOSE
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/working-mongo", 
    {useNewUrlParser: true})
.then(()=> {
    console.log("Conectado ao MongoDB com sucesso!")
})
.catch((erro)=>{
    console.log("Houve um erro ao se conectar ao MongoDB: "+erro)
})

//MODEL - USUARIO
const UsuarioSchema = mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    sobrenome:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    idade:{
        type: Number,
        require: true
    },
    pais:{
        type: String
    }
})

//COLLECTION
mongoose.model('usuarios', UsuarioSchema)

const novoUsuario = mongoose.model('usuarios')

new novoUsuario({
    nome: "Luana",
    sobrenome: "do Carmo",
    email: "luana1814@gmail.com",
    idade: 30,
    pais: "Brasil"
}).save().then(()=>{
    console.log("Usuario criado com sucesso!")
}).catch((err)=>{
    console.log("Erro ao criar usuario: "+err)
})