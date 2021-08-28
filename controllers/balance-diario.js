const { Balance } = require("../models");

const getAllBalances = async (req, res) => {
  try {
    const allBalances = await Balance.find();
    res.json({ results: allBalances });
  } catch (err) {
    res.status(500).json({ msg: "Error en db" });
  }
};

module.exports = {
  getAllBalances,
};
