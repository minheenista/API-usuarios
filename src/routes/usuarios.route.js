const express = require("express");
const router = express.Router(); // Aquí agrega los paréntesis para crear una instancia de router
const usuariosController = require("../controllers/usuarios.controller");

//Definir las rutas
router.get("/", usuariosController.getAllUsers);
router.get("/:email", usuariosController.getUserByEmail);
router.post("/", usuariosController.createUser);
router.put("/:email", usuariosController.updateUser);
router.delete("/:email", usuariosController.deleteUser);

module.exports = router;