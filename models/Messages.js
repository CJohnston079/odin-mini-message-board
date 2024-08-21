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

module.exports = {
	getAllMessages: () => messages,
	addMessage: (user, text) => {
		messages.push({ user, text, added: new Date() });
	},
};
