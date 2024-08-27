const db = require("../db/queries");

const getNewMessage = (req, res) => res.render("new", {});

async function postNewMessage(req, res) {
	await db.insertMessage(req.body);
	res.redirect("/");
}

module.exports = { getNewMessage, postNewMessage };
