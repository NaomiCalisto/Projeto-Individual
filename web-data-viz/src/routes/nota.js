var express = require("express");
var router = express.Router();

var notaController = require("../controllers/notaController");

//Recebendo os dados do html e direcionando para a função avaliar de scoreController.js
router.post("/avaliar", function (req, res) {
    notaController.avaliar(req, res);
})

module.exports = router;