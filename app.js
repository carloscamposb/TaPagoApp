var express = require('express'), 
path = require('path'), // É um módulo do Node.js que fornece utilitários para lidar com caminhos de arquivos e diretórios.
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// aqui onde tem localhost você coloca o numero do servidor do seu mongoDB : 27017 é a porta comum do mongo / o nome do banco de dados
mongoose.connect('mongodb+srv://carloscamposbn:wvjYZk2womNpnL6t@cluster0.c3npqki.mongodb.net/TaPago', { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

// wvjYZk2womNpnL6t


// esquemas de rotas importados
const cadastroRoute = require('./routes/cadastro.route');

var app = express(); //estanciação do express
app.use(bodyParser.json()); //torna a abstração mais facil de lidar e interpretar jsons principalmente quando tem formatos diferentes, quebrados...ele interpreta mesmo assim
app.use(cors()); //especifica por exemploq ue a api só receba as requisições de um enedereço especifico tipo o Netlyfly isso protege os dados

app.use('/cadastro', cadastroRoute); //toda entrada userRoute tem que começar com user ex: /user/delete/id


app.get('/', function(req, res){
   res.send("Hello World!");
});

app.listen(3000,function(){
    console.log('Listening on port 3000!');
});
