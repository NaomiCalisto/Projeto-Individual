var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimasGlobal/", function (req, res) {
    medidaController.buscarUltimasMedidasGlobal(req, res);
});

router.get("/ultimasUsuario/", function (req, res) {
    medidaController.buscarUltimasMedidasUsuario(req, res);
})

module.exports = router;