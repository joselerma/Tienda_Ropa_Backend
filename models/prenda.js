const { Schema, model } = require("mongoose");

const PrendaSchema = new Schema({
  descripcion: {
    type: String,
  },
  fechavt: {
    type: Date,
  },
  preciopb: {
    type: Number,
    required: [true, "El precio al publico es requerido"],
  },
  preciovt: {
    type: Number,
  },
  vendida: {
    type: Boolean,
    default: false,
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  inventario: {
    type: Schema.Types.ObjectId,
    ref: "Inventario",
    required: true,
  },
});

module.exports = model("Prenda", PrendaSchema);
