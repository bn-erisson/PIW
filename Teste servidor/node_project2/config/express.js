// config/express.js
// Importando módulo express (Padrão CommonJS)
//let express = require('express');
// Exportando módulo (Padrão CommonJS)
//module.exports = function() {
// let app = express();
//Definindo variável de aplicação
// app.set("port"
//, 3000);
// return app;
//};


// var express = require('express');
// module.exports = function() {
//  var app = express();
//  app.set("port"
// , 3000);
//  app.use(express.static('./public'));
//  return app;
// };

// var express = require('express');

// var alunos = 

// [{_id:1, nome:"Joao",matricula:"123"},
//  {_id:2,nome:"Pedro",matricula:"234"}];


// module.exports = function() {
//  var app = express();
//  app.set("port", 3000);
//  app.use(express.static('./public'));
//  app.get("/alunos",function(req, res){
//  res.json(alunos);
//  });
//  return app;
// app.get("/alunos/:id"
// ,function(req, res){
//  var id = req.params.id;
//  console.log(req.params);
//  var aluno = alunos.find(aluno => (aluno._id==id));
//  if(aluno){
//  res.json(aluno);
//  }else{
//  res.status(404).send('Aluno não encontrado');
//  }
// });
// return app;
// };

// var express = require('express');
// var alunosRouter = require('../routes/alunos.js');
// module.exports = function() {
//  var app = express();
//  app.set("port"
// , 3000);
//  app.use(express.static('./public'));
//  alunosRouter(app);
//  console.log(alunosRouter);
//  return app;
// };


let express = require('express');
let alunoRotas = require('../routes/alunos.js');
// let disciplinaRotas = require('../routes/disciplinas.js');
let bodyParser = require('body-parser');
module.exports = function(){
 var app = express();
 app.set("port"
, 3000);
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: false }));
 alunoRotas(app);
//  disciplinaRotas(app);
 return app;
}