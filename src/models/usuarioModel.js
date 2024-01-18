// usuarioModel.js

const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    // Otros campos relevantes para tu aplicación
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;
