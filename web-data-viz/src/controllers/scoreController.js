var scoreModel = require("../models/scoreModel");

function aplicar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo jogo.html
    var score = req.body.scoreServer;
    var idUsuario = req.body.usuarioServer
    // var momento = req.body.momentoServer;

    // Faça as validações dos valores
    if (score == undefined) {
        res.status(400).send("Seu score está undefined!");
    } 
    else if (idUsuario == undefined) {
        res.status(400).send("Seu momento está undefined!");
    }
    // else if (momento == undefined) {
    //     res.status(400).send("Seu momento está undefined!");
    // }
        
    // Passe os valores como parâmetro e vá para o arquivo scoreModel.js
    scoreModel.aplicar(score, idUsuario)
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
    aplicar
}