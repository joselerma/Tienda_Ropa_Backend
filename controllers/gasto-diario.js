const { Gastodiario } = require("../models");

const getAllGastosDiarios = async (req, res) => {
  try {
    const allGastos = await Gastodiario.find();
    res.json({ results: allGastos });
  } catch (err) {
    res.status(500).json({ msg: "Error en db" });
  }
};

module.exports = {
  getAllGastosDiarios,
};
