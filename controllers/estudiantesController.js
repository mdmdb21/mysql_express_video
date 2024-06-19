const db = require("../database/conexion.js");

class EstudiantesController {

    consultar(req, res) {
        try {
            const {dni, nombre, apellido, email} = req.body;
            db.query(`SELECT * FROM estudiantes
                (id, dni, nombre, apellido, email)
                VALUES(NULL, ?, ?, ?, ?);`,
                (err,rows) => {
                    if (err) {
                        res.status(400).send(err);
                    }
                    res.status(200).json(rows);
                })
        }catch(err) {
            res.status(500).send(err.message);
        }
       res.json({msg: "Consulta de estudiantes desde clase"});
    }
        

    consultarDetalle(req, res) {
        const { id } = req.params; //destructuración de objetos
        res.json({msg: "Consulta detalle estudiante desde clase con id ${id}"});
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
        res.json({msg: "Actualizar estudiante desde clase"});
    }

    borrar(req, res) {
        res.json({msg: "Borrar estudiante desde clase"});
    }
}


module.exports = new EstudiantesController();  //exportar una instancia de la clase para poder usarla en el archivo de rutas