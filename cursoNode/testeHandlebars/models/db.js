const Sequelize = require('sequelize')
    //Conexão com o banco mysql
    const sequelize = new Sequelize('postapp', 'root', 'B@ndok10',{
        host: 'localhost',
        dialect: 'mysql'
    })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}