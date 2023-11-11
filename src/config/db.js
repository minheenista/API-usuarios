const mongoose = require("mongoose");

const uri = "mongodb+srv://michifus:Youngjae333@web07.nt26l3k.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"; //es reomta

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Conexion a la base de datos exitosa");
    })
    .catch((error) => {
        console.error("No se pudo conectar a la base de datos");
        console.error(error);
    });

//Para poder usar la conexion en los controladores
module.exports = mongoose;
