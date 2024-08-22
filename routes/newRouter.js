const express = require("express");
const router = express.Router();
const newController = require("../controllers/newController");

router.get("/", newController.getNew);

router.post("/", newController.postNew);

module.exports = router;
