const pool = require("./pool");

async function getAllMessages() {
	const { rows } = await pool.query("SELECT * FROM message_board");
	return rows;
}

async function insertMessage(newMessage) {
	const { username, message } = newMessage;
	await pool.query("INSERT INTO message_board (username, message) VALUES($1, $2)", [
		username,
		message,
	]);
}

module.exports = {
	getAllMessages,
	insertMessage,
};
