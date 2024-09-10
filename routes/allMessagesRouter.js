const express = require("express");
const router = express.Router();
const controller = require("../controllers/allMessagesController");

router.get("/", controller.getAllMessages);

module.exports = router;
