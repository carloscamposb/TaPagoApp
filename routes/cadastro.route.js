const express = require('express');
const app = express();
const cadastroRoutes= express.Router(); 
//padrao é passar o nome da rota que esta trabalhando

let Cadastro = require('../model/CadastroApp');

// api to add cadastro 
cadastroRoutes.route('/add').post(function (req, res) {
  console.log('Dados recebidos do formulário:', req.body); 
  let cadastro = new Cadastro(req.body); //vem no corpo da requisição do front 
  cadastro.save()
  // tratamento de erro
  .then(cadastro => {
    res.status(200).json({'status': 'success','mssg': 'cadastro added successfully'}); //devolve ao front
  })
  .catch(err => {
    res.status(409).send({'status': 'failure','mssg': 'unable to save to database'}); //devolve ao front
  });
});

// api to get cadastros
cadastroRoutes.route('/').get(function (req, res) { //aqui só precisa dar a resposta quanto a lista de usuários
  Cadastro.find(function (err, cadastros){ //multiplos resultados você coloca o s no final
    
    //aqui é só outra forma de tratamento de rro mas entrega o mesmo resultado. Recomendado o uso de 'than e catch'
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','cadastros': cadastros});
    }
  });
});

// api to get a especif cadastro (tudo que tem id tem que trocar pelo do usuario especifico)
cadastroRoutes.route('/cadastro/:id').get(function (req, res) { //aqui precisa olhar para o que esta chegando
  let id = req.params.id; //pega os parametros da requisição passa pelo cabeçalho
  Cadastro.findById(id, function (err, cadastro){ //passa o id do usuario
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','cadastro': cadastro});
    }
  });
});

// api to update route
cadastroRoutes.route('/update/:id').put(function (req, res) {
    Cadastro.findById(req.params.id, function(err, cadastro) { //passa antes para saber se aquele usario realmente existe ou não
    if (!cadastro){
      res.status(400).send({'status': 'failure','mssg': 'Unable to find data'});
    } else {
      // modo diferente que pega as informações no corpo da requisição
        cadastro.username= req.body.username;
        cadastro.email = req.body.email;
        cadastro.password = req.body.password;
        cadastro.passwordConfirmation = req.body.passwordConfirmation;
        
        //O ideal aqui seria passar o tratamento através do then catch como não tem se tiver erro vai mostrar o erro generico que é 500
        cadastro.save().then(business => {
          res.status(200).json({'status': 'success','mssg': 'Update complete'});
      })
    }
  });
});

// api for delete
cadastroRoutes.route('/delete/:id').delete(function (req, res) {
  Cadastro.findByIdAndRemove({_id: req.params.id}, function(err,){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','mssg': 'Delete successfully'});
    }
  });
});

module.exports = cadastroRoutes; //exporta esquema de rota