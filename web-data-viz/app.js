// var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var medidasRouter = require("./src/routes/medidas");
var scoreRouter = require("./src/routes/score");
var notaRouter = require("./src/routes/nota");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/medidas", medidasRouter);
app.use("/score", scoreRouter);
app.use("/nota", notaRouter);



app.listen(PORTA_APP, function () {
    console.log(`
     _______  _______  _______  ______    _______                  
    |   _   ||       ||       ||    _ |  |       |                 
    |  |_|  ||  _____||_     _||   | ||  |   _   |                 
    |       || |_____   |   |  |   |_||_ |  | |  |                 
    |       ||_____  |  |   |  |    __  ||  |_|  |                 
    |   _   | _____| |  |   |  |   |  | ||       |                 
    |__| |__||_______|  |___|  |___|  |_||_______|                 
     _______  ___      _______  _______  __    _  __   __  _______ 
    |       ||   |    |       ||   _   ||  |  | ||  | |  ||       |
    |       ||   |    |    ___||  |_|  ||   |_| ||  | |  ||    _  |
    |       ||   |    |   |___ |       ||       ||  |_|  ||   |_| |
    |      _||   |___ |    ___||       ||  _    ||       ||    ___|
    |     |_ |       ||   |___ |   _   || | |   ||       ||   |    
    |_______||_______||_______||__| |__||_|  |__||_______||___| 
                                                                                         
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. 

    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. 

    \tSe .:desenvolvimento:. você está se conectando ao banco local. 
    \tSe .:producao:. você está se conectando ao banco remoto. 

    \t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'
`);});


