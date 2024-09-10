const renderMessageColours = (function () {
	const messageContainers = document.querySelectorAll(".message-container");

	const generateRandomColour = () => `hsl(${Math.floor(Math.random() * 360)}, 60%, 50%)`;

	messageContainers.forEach(container => {
		const colour = generateRandomColour();
		container.style.borderLeftColor = colour;
		container.style.color = colour;
	});
})();
