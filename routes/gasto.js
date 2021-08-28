const router = require("express").Router();
const { getAllGastos } = require("../controllers");

router.get("/", getAllGastos);

module.exports = router;
