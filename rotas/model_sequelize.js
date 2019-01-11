const Sequelize = require("sequelize");
const sequelize = new Sequelize("empresa","root","J@pa2560", {
	host: "localhost",
	dialect: "mysql"
})

const Postagem = sequelize.define("postagens", {
	titulo: {
		type: Sequelize.STRING
	},
	conteudo: {
		type: Sequelize.TEXT
	}
});

const Usuario = sequelize.define("usuarios", {
	nome: {
		type: Sequelize.STRING
	},
	idade: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING
	}
})

Usuario.sync({force:true});
Postagem.sync({force: true});