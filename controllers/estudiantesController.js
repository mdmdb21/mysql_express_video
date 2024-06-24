const db = require("../database/conexion.js");

class EstudiantesController {

    consultar(req, res) {
        try {
            db.query(`SELECT * FROM estudiantes`,
                (err,rows) => {
                    if (err) {
                        res.status(400).send(err);
                    }
                    res.status(200).json(rows);
                });
        }catch(err) {
            res.status(500).send(err.message);
        }
     
    }
        

    consultarDetalle(req, res) {
        const { id } = req.params; //destructuración de objetos
        try {
            db.query(`SELECT * FROM estudiantes WHERE id =?`, [id],
                (err,rows) => {
                    if (err) {
                        res.status(400).send(err);
                    }
                    res.status(200).json(rows[0]);
                });
        }catch(err) {
            res.status(500).send(err.message);
        }
    }

    ingresar(req, res) {
        try { 
            const {dni, nombre, apellido, email} = req.body;
            db.query(`INSERT INTO estudiantes
                    (id, dni, nombre, apellido, email)
                    VALUES(NULL, ?, ?, ?, ?);`,
                    [dni, nombre, apellido, email],(err,rows) => {
                        if (err) {
                            res.status(400).send(err);
                        }
                        res.status(201).json( { id:rows.insertId});
                    });
        } catch(err) {
            res.status(500).send(err.message);
        }
    }
    

    actualizar(req, res) {
        const {id} = req.params;
        try { 
            const {dni, nombre, apellido, email} = req.body;
            db.query(`UPDATE estudiantes
        SET dni=?, nombre=?, apellido=?, email=?
        WHERE id=?`,
                    [dni, nombre, apellido, email, id],(err,rows) => {
                        if (err) {
                            res.status(400).send(err);
                        }
                        if (rows.affectedRows == 1)
                        res.status(201).json ({respuesta: "Registro actualizado con éxito"});
                    });
        } catch(err) {
            res.status(500).send(err.message);
        }
       
    }

    borrar(req, res) {
        const {id} = req.params;
        try { 
            db.query(`DELETE estudiantes WHERE id= ?`,
                    [id],(err,rows) => {
                        if (err) {
                            res.status(400).send(err);
                        }
                        if (rows.affectedRows == 1)
                        res.status(201).json ({respuesta: "Registro eliminado con éxito"});
                    });
        } catch(err) {
            res.status(500).send(err.message);
        }
    }
}


module.exports = new EstudiantesController();  //exportar una instancia de la clase para poder usarla en el archivo de rutas