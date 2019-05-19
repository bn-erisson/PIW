let express = require('express');
let alunoRotas = require('../app/routes/alunos.js');
let disciplinaRotas = require('../app/routes/disciplinas.js');
let bodyParser = require('body-parser');
module.exports = function(){
 var app = express();
 app.set("port"
, 3000);
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: false }));
 alunoRotas(app);
 disciplinaRotas(app);
 return app;
}