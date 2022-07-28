export const transitionLayer = () => {
	const transitionTrigger =
		document.getElementsByClassName("transition-trigger");
	const transitionLayer = document.getElementById("transition-layer");
	for (let i = 0; i < transitionTrigger.length; i++) {
		transitionTrigger[i].addEventListener("click", function () {
			transitionLayer.classList.add("transition-layer");
			setTimeout(() => {
				transitionLayer.classList.remove("transition-layer");
			}, "1700");
		});
	}
};
