const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Cadastro = new Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  passwordConfirmation:{
    type: String
  }

},{
    collection: 'cadastro'
});

module.exports = mongoose.model('Cadastro', Cadastro); //exporta o modelo