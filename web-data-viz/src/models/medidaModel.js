var database = require("../database/config");

function buscarUltimasMedidasGlobal(limite_linhas) {

    var instrucaoSql = `select nome, max(score) as highscore from scoreboard join usuario on fkUsuario = idUsuario group by nome order by highscore desc limit ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidasGlobal
}