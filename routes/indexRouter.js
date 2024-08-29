const express = require("express");
const router = express.Router();
const controller = require("../controllers/indexController");

router.get("/", controller.getAllMessages);
router.get("*", controller.getPageNotFound);

module.exports = router;
