/**
 * Implement your converter function here.
 */
const diyOnicConverter = (textContentContainerSelector) => {
	const staticPrefix = 3; // number of characters that are bolded
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
				//Only needs to support a static prefix length (ie. the number of letters that are bolded)
				const highlightLength = Math.min(staticPrefix, word.length);
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
