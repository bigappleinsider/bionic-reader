const diyOnicConverter = (textContentContainerSelector, staticPrefix = 3) => {
	// number of characters that are bolded
	const container = document.querySelector(textContentContainerSelector);
	if (!container) {
		console.error(
			"Invalid selector. Container with the following selector is not found:",
			textContentContainerSelector
		);
		return;
	}
	console.log("Performing bionic reading conversion on:", container);

	const processTextNode = (node) => {
		const words = node.textContent.split(" ");
		const bionicWords = words.map((word) => {
			if (word.length > 1) {
				const highlightLength = Math.min(staticPrefix, word.length);
				return `<strong>${word.slice(0, highlightLength)}</strong>${word.slice(
					highlightLength
				)}`;
			}
			return word;
		});
		return bionicWords.join(" ");
	};

	const traverseNodes = (node) => {
		if (node.nodeType === Node.TEXT_NODE) {
			const span = document.createElement("span");
			span.innerHTML = processTextNode(node);
			node.replaceWith(span);
		} else if (node.nodeType === Node.ELEMENT_NODE) {
			node.childNodes.forEach(traverseNodes);
		}
	};

	traverseNodes(container);
};

const initBionicReader = () => {
	document.addEventListener("DOMContentLoaded", function () {
		const convertButton = document.getElementById("convertButton");
		const resetButton = document.getElementById("resetButton");
		const staticPrefixInput = document.getElementById("staticPrefix");
		const originalContent = document.querySelector(".content").innerHTML; // Store the original content

		convertButton.addEventListener("click", function () {
			const staticPrefix = staticPrefixInput.value;

			if (typeof diyOnicConverter === "function") {
				diyOnicConverter(".content", staticPrefix);
			} else {
				console.error("diyOnicConverter function is not defined.");
			}
		});

		resetButton.addEventListener("click", function () {
			const contentEl = document.querySelector(".content");
			contentEl.innerHTML = originalContent;
		});
	});
};

initBionicReader();

// Allow global access so that this can be executed from the console.
window.diyOnicConverter = diyOnicConverter;
