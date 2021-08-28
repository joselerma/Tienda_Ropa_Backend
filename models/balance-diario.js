const { Schema, model } = require("mongoose");

const BalanceDiarioSchema = new Schema({
  fecha: {
    type: Date,
    required: [true, "La fecha es requerida"],
  },
  gastos: {
    type: Schema.Types.ObjectId,
    ref: "Gastosdiarios",
    required: true,
  },
  ganancias: {
    type: Schema.Types.ObjectId,
    ref: "Gastosdiarios",
    required: true,
  },
  balance: {
    type: Number,
    required: [true, "El balance es requerido"],
  },
});

module.exports = model("Balance", BalanceDiarioSchema);
