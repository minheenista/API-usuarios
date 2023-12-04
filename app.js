const express = require("express");

const routeUsers = require("./src/routes/usuarios.route");

const app = express();
const port = process.env.PORT || 4000;

//Configuracion del servidor
app.use(express.json());

app.use("/app/users", routeUsers);

//Ejecutar servidor
app.listen(port, () => {
    console.log("Servidor escuchando en el puerto", port);
});