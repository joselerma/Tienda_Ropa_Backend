const { Schema, model } = require("mongoose");

const GastoDiarioSchema = new Schema({
  fecha: {
    type: Date,
    required: [true, "La fecha es requerida"],
  },
  gastos: [
    {
      ruta: {
        type: Schema.Types.ObjectId,
        ref: "Gasto",
        required: true,
      },
    },
  ],
  total: {
    type: Number,
    required: [true, "El total es requerido"],
  },
});

module.exports = model("Gastodiario", GastoDiarioSchema);
