const express = require("express");
const router = express.Router();
const messages = require("../models/Messages");

router.get("/", (req, res) => res.render("index", { messages: messages.getAllMessages() }));

module.exports = router;
