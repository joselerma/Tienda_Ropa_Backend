const { getAllInventario } = require("../controllers");

const router = require("express").Router();

router.get("/", getAllInventario);

module.exports = router;
