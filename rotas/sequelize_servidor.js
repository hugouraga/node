const Sequelize = require("sequelize");
const sequelize = new Sequelize("empresa", "root","J@pa2560",{
	host: "localhost",
	dialect: "mysql"
});

sequelize.authenticate().then(function(){
	console.log("conexão realizada com sucesso!");
}).catch(function(erro){
 	console.log("falha ao se conectar: " + erro)
})
