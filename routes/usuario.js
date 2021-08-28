const router = require("express").Router();
const { getAllUsuarios } = require("../controllers");

router.get("/", getAllUsuarios);

module.exports = router;
