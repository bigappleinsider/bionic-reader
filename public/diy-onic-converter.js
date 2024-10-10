/**
 * Implement your converter function here.
 */
const diyOnicConverter = (textContentContainerSelector) => {
	const container = document.querySelector(textContentContainerSelector);
	if (!container) {
		console.error(
			"Invalid selector. Container with the following selector is not found:",
			textContentContainerSelector
		);
		return;
	}
	console.log("Performing bionic reading conversion on:", container);

	const paragraphs = container.querySelectorAll("p");

	paragraphs.forEach((paragraph) => {
		const words = paragraph.textContent.split(" ");
		const bionicWords = words.map((word) => {
			if (word.length > 1) {
				const highlightLength = Math.ceil(word.length / 2);
				return `<strong>${word.slice(0, highlightLength)}</strong>${word.slice(
					highlightLength
				)}`;
			}
			// Keep single character as is, highlight is not needed
			return word;
		});

		paragraph.innerHTML = bionicWords.join(" ");
	});
};

// Allow global access so that this can be executed from the console.
window.diyOnicConverter = diyOnicConverter;
