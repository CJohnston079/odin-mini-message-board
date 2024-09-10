const renderMessageColours = (function () {
	const messageContainers = document.querySelectorAll(".message-container");

	const hues = Array.from({ length: 200 / 20 + 1 }, (_, i) => 150 + i * 30);
	const colours = hues.map(hue => `hsl(${hue}, 60%, 50%)`);

	const usernameColourMap = new Map();
	let colourIndex = 0;

	messageContainers.forEach(container => {
		const username = container.querySelector(".message-username").textContent;

		if (!usernameColourMap.has(username)) {
			usernameColourMap.set(username, colours[colourIndex % colours.length]);
			colourIndex++;
		}

		const colour = usernameColourMap.get(username);

		container.style.borderLeftColor = colour;
		container.style.color = colour;
	});
})();
