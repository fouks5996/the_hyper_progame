export const searchTrigger = () => {
	setTimeout(() => {
		const listWrapper = document.getElementById("article");
		const article = listWrapper.getElementsByTagName("article");
		const input = document.getElementById("myInput");
		const filter = input.value.toUpperCase();

		for (let i = 0; i < listWrapper.clientHeight; i++) {
			console.log(article[i]);
			let textValue = article[i].textContent || article[i].innerText;
			if (textValue.toUpperCase().indexOf(filter) > -1) {
				article[i].style.display = "";
			} else {
				article[i].style.display = "none";
			}
		}
	}, "400");
};
