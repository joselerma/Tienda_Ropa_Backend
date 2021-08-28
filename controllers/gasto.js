const { Gasto } = require("../models");

const getAllGastos = async (req, res) => {
  try {
    const allGastos = await Gasto.find();
    res.json({ results: allGastos });
  } catch (err) {
    res.status(500).json({ msg: "Error en db" });
  }
};

module.exports = {
  getAllGastos,
};
