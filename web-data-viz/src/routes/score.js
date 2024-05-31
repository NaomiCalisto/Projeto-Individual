var express = require("express");
var router = express.Router();

var scoreController = require("../controllers/scoreController");

//Recebendo os dados do html e direcionando para a função aplicar de scoreController.js
router.post("/aplicar", function (req, res) {
    scoreController.aplicar(req, res);
})

module.exports = router;