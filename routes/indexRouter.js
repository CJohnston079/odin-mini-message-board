const express = require("express");
const router = express.Router();
const messages = require("../models/Messages");

router.get("/", (req, res) => res.render("index", { messages: messages.getAllMessages() }));

router.post("/new", (req, res) => {
	const { user, text } = req.body;
	messages.addMessage(user, text);
	res.redirect("/");
});

module.exports = router;
