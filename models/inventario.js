const { Schema, model } = require("mongoose");

const InventarioSchema = new Schema({
  fecha: {
    type: Date,
    required: [true, "La fecha de ingreso es requerida"],
  },
  cantidad: {
    type: Number,
    default: 1,
    required: true,
  },
  nombre: {
    type: String,
    required: [true, "El nombre es requerido"],
    default: "Prenda",
  },
  descripcion: {
    type: String,
  },
  costo: {
    type: Number,
    required: [true, "El costo del producto es requerido"],
  },
  registrado: {
    type: Boolean,
    default: false,
    required: true,
  },
});

module.exports = model("Inventario", InventarioSchema);
