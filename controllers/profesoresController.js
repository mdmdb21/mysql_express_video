const db = require("../database/conexion.js");
const express = require("express");
const cursosController = require("../controllers/cursosController.js");
class ProfesoresController {

    consultar(req, res) {
        try {
            const {dni, nombre, apellido, email, id, profesion, telefono } = req.query;
            db.query(`INSERT INTO pofesores
                    (id, dni, nombre, apellido, email, profesion, telefono)
                    VALUES(NULL, ?, ?, ?, ?, ?, ?);`,
                 [dni, nombre, apellido, email, id, profesion, telefono], (err, rows) => {
                    if (err) {
                        res.status(400).send(err);
                    }else {
                        res.status(201).json({id: rows.insertId});
                    }
                    
                });
        }catch (err) {
            res.status(500).send(err.message);
        }
        res.json({msg: "consultar profesor"});
    }
        

    consultarDetalle(req, res) {
        try {
            const {dni, nombre, apellido, email, id, profesion, telefono } = req.query;
            db.query(`INSERT INTO pofesores
                    (id, dni, nombre, apellido, email, profesion, telefono)
                    VALUES(NULL, ?, ?, ?, ?, ?, ?);`,
                 [dni, nombre, apellido, email, id, profesion, telefono], (err, rows) => {
                    if (err) {
                        res.status(400).send(err);
                    }
                    res.status(201).json({id: rows.insertId});
                });
        }catch (err) {
            res.status(500).send(err.message);
        }
        res.json({msg: "consultar un profesor"});
    }

    ingresar(req, res) {
        try {
            const {dni, nombre, apellido, email, id, profesion, telefono } = req.query;
            db.query(`INSERT INTO pofesores
                    (id, dni, nombre, apellido, email, profesion, telefono)
                    VALUES(NULL, ?, ?, ?, ?, ?, ?);`,
                 [dni, nombre, apellido, email, id, profesion, telefono], (err, rows) => {
                    if (err) {
                        res.status(400).send(err);
                    }else {
                        res.status(201).json({id: rows.insertId});
                    }
                });
        }catch (err) {
            res.status(500).send(err.message);
        }
        
    }

    actualizar(req, res) {
        const {id} = req.params;
        try{
            const {dni, nombre, apellido, email, profesion, telefono} = req.body;
            db.query(`UPDATE profesores
                SET dni = ?, nombre = ?, apellido = ?, email = ?, profesion = ?, telefono = ? 
                WHERE id = ?;`,
                [dni, nombre, apellido, email, profesion, telefono], (err, rows) => {
                    if (err) {
                        res.status(400).send(err);
                    }
                    if (rows.afeectedRows == 1) 
                        res.status(200).json({msg: "Profesor actualizado"});
                })
                
        } catch (err) {
            res.status(500).send(err.message);
        }
        res.json({msg: "Actualizar profesor desde clase"});
    }

    borrar(req, res) {
        const {id} = req.params;
        try {
            db.query(`DELETE FROM profesores WHERE id = ?`, [id], (err, rows) => {
                if (err) {
                    res.status(400).send(err);
                }
                if (rows.affectedRows == 1)
                    res,status(200).json({respuesta: "Registro eleminado con éxito"});
            })

        }catch (err) {
            res.status(500).send(err.message);
        }
        res.json({msg: "Borrar profesor desde clase"});
    }
}


module.exports = new ProfesoresController();