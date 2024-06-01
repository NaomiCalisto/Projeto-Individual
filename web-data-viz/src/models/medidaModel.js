var database = require("../database/config");

function buscarUltimasMedidasGlobal(limite_linhas) {

    var instrucaoSql = `select nome, max(score) as highscore from scoreboard join usuario on fkUsuario = idUsuario group by nome order by highscore desc limit ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasUsuario(idUsuario, limite_linhas) {

    var instrucaoSql = `select score, momento from scoreboard join usuario on fkUsuario = idUsuario where fkUsuario = ${idUsuario} order by momento desc limit ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidasGlobal,
    buscarUltimasMedidasUsuario
}