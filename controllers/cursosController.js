const db = require("../database/conexion.js");

class CursosController {

    consultar(req, res) {
       res.json({msg: "Consulta de cursos desde clase"});
    }
        

    consultarDetalle(req, res) {
        const { id } = req.params; //destructuración de objetos
        res.json({msg: "Consulta detalle cursos desde clase con id ${id}"});
    }

    ingresar(req, res) {
        res.json({msg: "Ingresar a cursos desde clase"});
    }

    actualizar(req, res) {
        res.json({msg: "Actualizar cursos desde clase"});
    }

    borrar(req, res) {
        res.json({msg: "Borrar cursos desde clase"});
    }
}


module.exports = new CursosController(); 