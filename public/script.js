document.addEventListener("DOMContentLoaded", () => {
	const container = document.querySelector("#messages");
	if (container) {
		container.scrollTop = container.scrollHeight;
	} else {
		console.log("No container found");
	}
});
