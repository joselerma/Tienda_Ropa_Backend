const router = require("express").Router();
const { getAllGanancias } = require("../controllers");

router.get("/", getAllGanancias);

module.exports = router;
