const express = require("express");
const db = require("../database/conexion.js");
const router = express.Router();

class CursosController {

    consultar(req, res) {
        
       res.json({msg: "Consulta de cursos desde clase"});
    }
        

    consultarDetalle(req, res) {
        const { id } = req.params; //destructuración de objetos
        res.json({msg: "Consulta detalle cursos desde clase con id ${id}"});
    }

    ingresar(req, res) {
        const { nombre, descripcion, id_profesor } = req.body;
        db.query(`INSERT INTO cursos (id, nombre, descripcion, id_profesor) VALUES (NULL, ?, ?, ?);`, [nombre, descripcion, id_profesor], (err, rows) => {
            if (err) {
                res.status(400).send(err.message);
            }else {
                res.status(201).json({id: rows.insertId});
            }
        });
    } catch (err) {
        res.status(500).send(err.message);
    }

    actualizar(req, res) {
        res.json({msg: "Actualizar cursos desde clase"});
    }

    borrar(req, res) {
        res.json({msg: "Borrar cursos desde clase"});
    }

    asociarEstudiante(req, res) {
        const { cursos_id, estudiante_id, profesor_id } = req.body;
        db.query(`INSERT INTO cursos_estudiantes (cursos_id, estudiante_id) VALUES ( ?, ?);`, [curso_id, estudiante_id], (err, rows) => {
            if (err) {
                res.status(400).send(err);
            }else {
                res.status(201).json({respuesta: "Estudiante asociado al curso"});
            }
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
}


module.exports = new CursosController(); 