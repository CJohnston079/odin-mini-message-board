document.addEventListener("DOMContentLoaded", () => {
	const container = document.querySelector("#message-board-container");
	if (container) {
		container.scrollTop = container.scrollHeight;
	} else {
		console.log("No container found");
	}
});

renderMessageColours = (function () {
	const messageContainers = document.querySelectorAll(".message-container");

	const generateRandomColour = () => `hsl(${Math.floor(Math.random() * 360)}, 60%, 50%)`;

	messageContainers.forEach(container => {
		const colour = generateRandomColour();
		container.style.borderLeftColor = colour;
		container.style.color = colour;
	});
})();
