const db = require("../db/queries");

const getNewMessage = (req, res) => res.render("newMessage", {});

async function postNewMessage(req, res) {
	if (req.body.username) {
		req.body.username = req.body.username
			.toLowerCase()
			.replace(/\b\w/g, char => char.toUpperCase());
	}

	await db.insertMessage(req.body);
	res.redirect("/");
}

module.exports = { getNewMessage, postNewMessage };
