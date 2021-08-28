const { Schema, model } = require("mongoose");

const UsuarioSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es requerido"],
  },
  password: {
    type: String,
    required: [true, "La contraseña es requerida"],
  },
  sueldo: {
    type: Number,
  },
  admin: {
    type: Boolean,
    required: true,
    default: false,
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
});

module.exports = model("Usuario", UsuarioSchema);
