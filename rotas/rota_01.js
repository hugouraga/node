const express = require("express");
const app = express();

const exportar = require("./exportando.js");


app.get("/", function(req, res, next){
	res.send("olá, mundo!");
	next();
});
app.get("/sobre", function(req, res, next){
	res.send("retornar uma determinada página web");
	next();
});
app.get("/contato", function(req, res, next){
	res.send("retornar uma determinada pagina web")
	next();
});
app.get("/somar/:valor1/:valor2", function(req, res, next){
	res.send("A soma dos valores é igual: " + String(parseInt(req.params.valor1) + parseInt(req.params.valor2)));
	next();
});

app.use(express.static(__dirname +"/public"));
// permite carregar arquivos estáticos do diretótio public

app.listen(8000, function(){
	console.log("conexão realizada com sucesso!");
	console.log(exportar.exportar());
})

