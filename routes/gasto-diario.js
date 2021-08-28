const router = require("express").Router();
const { getAllGastosDiarios } = require("../controllers");

router.get("/", getAllGastosDiarios);

module.exports = router;
