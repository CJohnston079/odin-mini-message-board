const db = require("../db/queries");
const timeAgo = require("../utils/timeAgo");

async function getAllMessages(req, res) {
	const messages = await db.getAllMessages();
	res.render("index", { messages, formatDate: timeAgo });
}

module.exports = { getAllMessages };
