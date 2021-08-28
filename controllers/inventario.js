const { Inventario } = require("../models");

const getAllInventario = async (req, res) => {
  try {
    const allInventario = await Inventario.find();
    res.json({ results: allInventario });
  } catch (err) {
    res.status(500).json({ msg: "Error en db" });
  }
};

module.exports = {
  getAllInventario,
};
