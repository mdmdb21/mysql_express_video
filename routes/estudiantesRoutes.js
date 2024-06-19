const express = require("express");
const router = express.Router();
const estudiantesController = require("../controllers/estudiantesController.js"); //importar el controlador para poder abreviar las rutas

router.get("/", function(req, res){
    estudiantesController.consultar(req, res);
}); //ruta para consultar estudiantes

router.post("/", estudiantesController.ingresar);

router.route("/:id")
    .get(estudiantesController.consultarDetalle)
    .put(estudiantesController.actualizar)
    .delete(estudiantesController.borrar);



module.exports = router;

//eliminar la palabra estudiantes de las rutas y hacer un module.exports = router; para exportar el archivo y hacer un require en el archivo index.js y poner expensión js en el require de estudiantesRoutes.js