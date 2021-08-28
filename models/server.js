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
