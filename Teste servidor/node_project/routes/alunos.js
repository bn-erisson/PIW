let controller =
require("../controllers/alunos.js");
module.exports = function(app){
 app.get("/alunos"
,controller.listaAlunos);
 app.get("/alunos/:id"
,controller.obterAluno)};