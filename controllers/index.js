const prenda = require("./prenda");
const usuario = require("./usuario");
const inventario = require("./inventario");
const balance = require("./balance-diario");
const gasto = require("./gasto");
const ganancia = require("./ganancia");
const gastoDiario = require("./gasto-diario");

module.exports = {
  ...prenda,
  ...usuario,
  ...inventario,
  ...balance,
  ...gasto,
  ...ganancia,
  ...gastoDiario,
};
