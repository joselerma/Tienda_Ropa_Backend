const router = require("express").Router();
const { getAllBalances } = require("../controllers");

router.get("/", getAllBalances);

module.exports = router;
