const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste_sequelize', 'root', 'B@ndok10', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Connection Success!")
}).catch(function(erro){
    console.log("Connection ERROR: " + erro)
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

//Postagem.sync({force: true})

/*Postagem.create({
    titulo: "novo titulo",
    conteudo: "conteudo teste"
})*/

const Usuarios = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

//Usuarios.sync({force: true})

/*Usuarios.create({
    nome:"Georges",
    sobrenome: "Pereira",
    idade: 29,
    email: "georgesdc13@gmail.com"
})*/