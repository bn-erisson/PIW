var mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

var mongoDB_URI = 'mongodb://127.0.0.1:27017/piw';
// o que é URI? uri é o caminho todo até o final ou so o pedaço?
mongoose.connect(mongoDB_URI,{useNewUrlParser:true});

var db = mongoose.connection;

// isso é pra saber se deu certo se conetcar com o mongo
db.on('connected',()=>{
    console.log('Mongoose Connected to '+mongoDB_URI);
   });

db.on('disconnected',()=>{
    console.log('Mongoose Disconnected to '+mongoDB_URI);
   });

db.on('error',(err)=>{
    console.log('Mongoose Error: '+err);
   });

// a primeira coisa que devo fazer é importar esses arquivo no app.js
