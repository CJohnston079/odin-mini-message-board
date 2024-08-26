const messages = require("../models/Messages");
const timeAgo = require("../utils/timeAgo");

const getIndex = (req, res) => {
	const allMessages = messages.getAllMessages();

	res.render("index", { messages: allMessages, formatDate: timeAgo });
};

module.exports = { getIndex };
