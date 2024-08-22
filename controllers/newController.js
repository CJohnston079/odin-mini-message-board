const messages = require("../models/Messages");

const getNew = (req, res) => res.render("new", {});

const postNew = (req, res) => {
	const { user, text } = req.body;
	messages.addMessage(user, text);
	res.redirect("/");
};

module.exports = { getNew, postNew };
