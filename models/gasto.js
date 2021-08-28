const { Schema, model } = require("mongoose");

const GastoSchema = new Schema({
  descripcion: {
    type: String,
    required: [true, "La descripcion es requerida"],
    defalut: "Sueldo",
  },
  cantidad: {
    type: Number,
    required: [true, "La cantidad es requerida"],
  },
  fecha: {
    type: Date,
    required: [true, "La fecha es requerida"],
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
});

module.exports = model("Gasto", GastoSchema);
