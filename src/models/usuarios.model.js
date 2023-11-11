const mongoose = require("../config/db");
const { Schema } = mongoose;

//Estructura de la coleccion
const UserSchema = new Schema({
    name: { type: String, allowNull: false },
    lastname: { type: String, allowNull: false },
    username: { type: String, allowNull: false, unique: true },
    email: { type: String, unique: true, allowNull: false },
    password: { type: String, allowNull: false },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;