const { Ganancia } = require("../models");

const getAllGanancias = async (req, res) => {
  try {
    const allGanancias = await Ganancia.find();
    res.json({ results: allGanancias });
  } catch (err) {
    res.status(500).json({ msg: "Error en db" });
  }
};

module.exports = {
  getAllGanancias,
};
