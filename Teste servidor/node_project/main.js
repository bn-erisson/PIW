let modulo = require('./novo_modulo.js');
console.log(modulo);
console.log(modulo.a);
console.log(modulo.b);
console.log(modulo.c);  

var http = require('http');
var app = require('./config/express')();
http.createServer(app).listen(app.get('port'), function(){
 console.log('Express Server escutando na porta ' + app.get('port'));
});