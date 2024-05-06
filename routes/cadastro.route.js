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
cadastroRoutes.route('/').get(function (req, res) { // aqui só precisa dar a resposta quanto à lista de usuários
  Cadastro.find() // múltiplos resultados, você coloca o 's' no final
    .then(cadastros => { // aqui é só outra forma de tratamento de erro, mas entrega o mesmo resultado. Recomendado o uso de 'then' e 'catch'
      res.status(200).json({'status': 'success', 'cadastros': cadastros});
    })
    .catch(err => {
      res.status(400).json({'status': 'failure', 'mssg': 'Something went wrong'});
    });
});

// api to get a especif cadastro (tudo que tem id tem que trocar pelo do usuario especifico)
cadastroRoutes.route('/:id').get(function (req, res) { //aqui precisa olhar para o que esta chegando
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

cadastroRoutes.route('/update/:id').put(function (req, res) {
  Cadastro.findById(req.params.id)
    .then(cadastro => {
      if (!cadastro) {
        res.status(400).json({'status': 'failure','mssg': 'Unable to find data'});
      } else {
        cadastro.username = req.body.username;
        cadastro.email = req.body.email;
        cadastro.password = req.body.password;
        cadastro.passwordConfirmation = req.body.passwordConfirmation;
        
        return cadastro.save();
      }
    })
    .then(() => {
      res.status(200).json({'status': 'success','mssg': 'Update complete'});
    })
    .catch(err => {
      res.status(500).json({'status': 'failure', 'mssg': err.message});
    });
});

cadastroRoutes.route('/delete/:id').delete(function (req, res) {
  Cadastro.findByIdAndDelete({_id: req.params.id})
    .then(deletedCadastro => {
      if (!deletedCadastro) {
        res.status(400).json({'status': 'failure', 'mssg': 'Unable to find data to delete'});
      } else {
        res.status(200).json({'status': 'success', 'mssg': 'Delete successful'});
      }
    })
    .catch(err => {
      res.status(500).json({'status': 'failure', 'mssg': err.message});
    });
});

module.exports = cadastroRoutes;