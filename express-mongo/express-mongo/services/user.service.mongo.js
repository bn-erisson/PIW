// esses metodos são do moongosse não foi o jerfferson que fez
const UserModel = require('../models/user.model');
class UserService{
    
    //retorna um objeto que representa um User

    static register(req,res){
        // o objeto json a ser recebido vai ser um json que vem no body da requisição
        UserModel.create(req.body).then(
            // isso vai ser a resposta 
            (user)=>{
                // "201" é a resposta do servidor
                res.status(201).json(user);
            }
        );
    }
    //retorna um vetor de users
    static list(req,res){
        UserModel.find().then(
            (users)=>{
                res.status(201).json(users);
            }
        );
    }

    //retorna um user atualizado
 static update(req,res){
        UserModel.findByIdAndUpdate(req.params.id, req.body, {'new':true}).then( // "{'new':true}" serve pra ele retornar o objeto modficado
            (user)=>{
                res.status(201).json(user);
            }
        );
    }
    //retorna o user deletado
    static delete(req,res){
        UserModel.findByIdAndRemove(req.params.id).then(
            (user)=>{
                res.status(201).json(user);
            }
        );
    }
    //retorna um user
    static retrieve(req,res){
        UserModel.findById(req.params.id).then(
            (user)=>{
                res.status(201).json(user);
            }
        );
    }
    
    static retrieveByLogin(req,res){
        // não entendi esse find
        UserModel.find({'login':req.params.login}).then(
            (user)=>{
                res.status(201).json(user);
            }
        );
    }
}

module.exports = UserService;