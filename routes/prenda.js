const { getAllPrendas } = require("../controllers");

const router = require("express").Router();

router.get("/", getAllPrendas);
router.get("/:id");
router.post("/");
router.put("/:id");

module.exports = router;
