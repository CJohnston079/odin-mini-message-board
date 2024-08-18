const express = require("express");
const router = express.Router();

const messages = [
	{
		text: "Woof!",
		user: "Rocky",
		added: new Date(),
	},
	{
		text: "Woof woof!",
		user: "Milo",
		added: new Date(),
	},
];

router.get("/", (req, res) => res.render("index", { messages: messages }));

router.post("/new", (req, res) => {
	const { user, text } = req.body;
	messages.push({ user: user, text: text, added: new Date() });
	res.redirect("/");
});

module.exports = router;
