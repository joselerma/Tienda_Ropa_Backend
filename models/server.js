const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../db/config");
const morgan = require("morgan");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.path = {
      prenda: "/prenda",
      inventario: "/inventario",
      usuario: "/usuario",
      balance: "/balance",
      gasto: "/gasto",
      ganancia: "/ganancia",
      gastoDiario: "/gastoDiario",
    };
    this.middlewares();
    this.dbConnection();
    this.routes();
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(morgan("dev"));
  }
  routes() {
    this.app.use(this.path.prenda, require("../routes/prenda"));
    this.app.use(this.path.inventario, require("../routes/inventario"));
    this.app.use(this.path.usuario, require("../routes/usuario"));
    this.app.use(this.path.balance, require("../routes/balance-diario"));
    this.app.use(this.path.gasto, require("../routes/gasto"));
    this.app.use(this.path.ganancia, require("../routes/ganancia"));
    this.app.use(this.path.gastoDiario, require("../routes/gasto-diario"));
  }
  async dbConnection() {
    await dbConnection();
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Listen in the port ${this.port}`);
    });
  }
}

module.exports = Server;
