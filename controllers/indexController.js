const messages = require("../models/Messages");

const getIndex = (req, res) => {
	const allMessages = messages.getAllMessages();

	res.render("index", { messages: allMessages });
};

module.exports = { getIndex };
