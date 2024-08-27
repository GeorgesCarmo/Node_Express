const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Posts')

// Config
    //Templete Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main', runtimeOptions:{allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true}}))
    app.set('view engine', 'handlebars')

    //body-parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    //ROTAS
    app.get("/cad", function(req, res){
        res.render('formulario')
    })

    app.get('/', function(req, res){
        Post.findAll({order: [['id', 'desc']]}).then(function(posts){
            res.render('home', {posts: posts})
        })
    })

    app.post('/add', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            //res.send("Post criado com sucesso!")
            res.redirect('/')
        }).catch(function(erro){
            res.send("ERROR: " + erro)
        })
    })

    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.send("Postagem deletada com sucesso!")
        }).catch(function(erro){
            res.send("Esse post não existe")
        })
    })

app.listen(8081, function(){
    console.log("Server ON")
})