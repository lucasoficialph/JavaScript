const Sequelize = require('sequelize');

const sequelize = new Sequelize("pessoas", "root", "123456", {
    host: "localhost",
    dialect:"mysql"
})

sequelize.authenticate()
.then(function(){
    console.log("Conexão com banco de dados realizada com sucesso!")
}).catch(function(){
    console.log("Erro: Conexão com banco de dados não realizada com sucesso!")
})

module.exports = Sequelize