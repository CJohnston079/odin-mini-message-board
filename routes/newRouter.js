const express = require("express");
const router = express.Router();
const messages = require("../models/Messages");

router.get("/", (req, res) => res.render("new", {}));

router.post("/", (req, res) => {
	const { user, text } = req.body;
	messages.addMessage(user, text);
	res.redirect("/");
});

module.exports = router;
