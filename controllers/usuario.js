const { Usuario } = require("../models");

const getAllUsuarios = async (req, res) => {
  try {
    const allUsuarios = await Usuario.find();
    res.json({ results: allUsuarios });
  } catch (err) {
    res.status(500).json({ msg: "Error en db" });
  }
};

module.exports = {
  getAllUsuarios,
};
