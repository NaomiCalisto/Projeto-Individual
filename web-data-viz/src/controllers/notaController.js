var notaModel = require("../models/notaModel");


function avaliar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo jogo.html
    var idUsuario = req.body.usuarioServer
    var nota = req.body.notaServer;
    // var momento = req.body.momentoServer;

    // Faça as validações dos valores
    if (idUsuario == undefined) {
        res.status(400).send("Seu idUsuario está undefined!");
    } 
    else if (nota == undefined) {
        res.status(400).send("Seu nota está undefined!");
    }

        
    // Passe os valores como parâmetro e vá para o arquivo scoreModel.js
    notaModel.avaliar(idUsuario, nota)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    avaliar
}