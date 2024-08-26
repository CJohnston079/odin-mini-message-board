function timeAgo(date) {
	const now = new Date();
	const seconds = Math.floor((now - date) / 1000) + 1;

	const intervals = {
		year: 31536000,
		month: 2592000,
		day: 86400,
		hour: 3600,
		minute: 60,
		second: 1,
	};

	for (const [key, value] of Object.entries(intervals)) {
		const interval = Math.floor(seconds / value);

		if (interval >= 1) {
			return `${interval} ${key}${interval > 1 ? "s" : ""} ago`;
		}
	}

	return "Just now";
}

module.exports = timeAgo;
