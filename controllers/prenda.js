const { Prenda } = require("../models");

const getAllPrendas = async (req, res) => {
  try {
    const { vendida, fecha } = req.query;

    let data = {};
    if (vendida) data = { vendida };
    if (fecha) data = { ...data, fecha };
    const allPrendas = await Prenda.find(data);
    res.json({ results: allPrendas });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error en db" });
  }
};

module.exports = {
  getAllPrendas,
};
