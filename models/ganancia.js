const { Schema, model } = require("mongoose");

const GananciaSchema = new Schema({
  fecha: {
    type: Date,
    required: [true, "La fecha es requerida"],
  },
  caja: {
    type: Number,
    required: [true, "El total en caja es requerido"],
  },
  ganancia: {
    type: Number,
    required: [true, "La ganancia es requerida"],
  },
  prendas: [
    {
      ruta: {
        type: Schema.Types.ObjectId,
        ref: "Prenda",
        required: true,
      },
    },
  ],
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
});

module.exports = model("Ganancia", GananciaSchema);
