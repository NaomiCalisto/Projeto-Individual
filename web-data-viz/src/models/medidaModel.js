var database = require("../database/config");

function buscarUltimasMedidasGlobal(limite_linhas) {

    var instrucaoSql = `select nome, max(score) as highscore from Scoreboard join Usuario on fkUsuario = idUsuario group by nome order by highscore limit ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasUsuario(idUsuarioServer, limite_linhas) {

    var instrucaoSql = `select score, DATE_FORMAT(momento, '%d/%m/%Y %H:%i:%s') as momento from Scoreboard join Usuario on fkUsuario = idUsuario where fkUsuario = ${idUsuarioServer} order by momento limit ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidasGlobal,
    buscarUltimasMedidasUsuario
}