const db = require("../database/conexion.js");

class ProfesoresController {

    consultar(req, res) {
       res.json({msg: "Consulta de profesores desde clase"});
    }
        

    consultarDetalle(req, res) {
        res.json({msg: "Consulta detalle profesor desde clase"});
    }

    ingresar(req, res) {
        res.json({msg: "Ingresa profesor desde clase"});
    }

    actualizar(req, res) {
        res.json({msg: "Actualizar profesor desde clase"});
    }

    borrar(req, res) {
        res.json({msg: "Borrar profesor desde clase"});
    }
}


module.exports = new ProfesoresController();