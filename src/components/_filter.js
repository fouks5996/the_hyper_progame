export const filterPlatform = (nodeList, array, btn, btn1) => {
	for (let i = 0; i < nodeList.length; i++) {
		nodeList[i].addEventListener("change", (e) => {
			const listWrapper = document.getElementById("article");
			const article = listWrapper.getElementsByTagName("article");
			const label = document.getElementById("platform-name");
			const filter = e.target.value;

			for (let a = 0; a < array.length; a++) {
				if (article[a].textContent.match(filter)) {
					btn1.style.display = "none";
					btn.style.display = "none";
					article[a].style.display = "";
					label.textContent = `Filtre actif : ${filter}`;
				} else {
					article[a].style.display = "none";
				}
				const resetBtn = document.getElementById("reset-btn");

				resetBtn.addEventListener("click", function () {
					article[a].style.display = "";
					label.textContent = `Filtrer`;
				});
			}
		});
	}
};
