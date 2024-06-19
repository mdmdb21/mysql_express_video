const express = require("express");
const app = express();
const cors = require("cors");
const estudiantesRoutes = require("./routes/estudiantesRoutes.js");
const profesoresRoutes = require("./routes/profesoresRoutes.js");

app.use(express.json());
app.use(cors());
app.get("/",(req, res) => {
    res.send("Hola Mundo");
})

app.use("/estudiantes", estudiantesRoutes); //para cualquiera de las rutas /estudiantes usa estudiantesRoutes

app.use("/profesores", profesoresRoutes);
app.listen(6500,() => {
    console.log("servidor activo");
});

