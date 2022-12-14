// import { PageList } from "./PageList";
import { transString } from "../components/_transformString";
import { getParentPlatformsName } from "../components/_platforms_name";
import { scrollToTop } from "../components/_scrollToTop";
import { transitionLayer } from "../components/_transition_layer";

export const Platform = (argument) => {
	scrollToTop();
	const API_KEY = "888640baf15f4cb9b302fbdbf68c620a";

	const titlePageList = document.getElementById("title-page-list");
	const article = document.getElementById("article");
	const listContent = document.getElementById("list-content");
	const pageDetail = document.getElementById("page-detail");
	const pagePublisher = document.getElementById("page-publisher");
	const publisherTitle = document.getElementById("publisher-title");
	publisherTitle.style.display = "";
	pagePublisher.style.display = "";
	titlePageList.innerHTML = "";
	article.innerHTML = "";
	pageDetail.innerHTML = "";
	listContent.style.display = "none";

	let url = `https://api.rawg.io/api/games?key=${API_KEY}&platforms=${argument}`;
	let arrayPlatform = [];

	// fetch
	const fetchPlatform = async (url) => {
		await fetch(url)
			.then((res) => res.json())
			.then((response) => (arrayPlatform = response.results));
	};

	const showPlatform = async () => {
		await fetchPlatform(url);

		publisherTitle.innerHTML = `
      <h1 class="title-white" style="margin-left:45px; margin-bottom: 30px"> Tout les jeux sur <span id="platform-change" class="text-underline"> ${transString(
				argument
			)} </span>  </h1>
      `;

		console.log(arrayPlatform);

		pagePublisher.innerHTML = arrayPlatform
			.map(
				(article) => `
            
            <article class="cardGame reveal3" >
				<a href="#pagedetail/${
					article.id
				}" id="scroll-to" class="transition-trigger">                  
					<img class="item-image" src=${article.background_image}></img>
					<h1 class="movie-title">${article.name}</h1>
					<p id="svg-inside" class="hover-content"> ${getParentPlatformsName(
						article
					)} </p>
				</a>
				<div class="layer-info">
					<div style="padding:22px">
						<p class="hover-info">  ${article.released} </p>
						<p class="hover-info">  ${article.rating}/5 - ${article.ratings_count} votes</p>
						<p class="hover-info" id="hover-info-studio">  </p>
					</div>
				</div>
			</article>`
			)
			.join(" ");
		transitionLayer();

		var slideUp = {
			distance: "14%",
			origin: "bottom",
			opacity: 0,
			delay: 600,
			interval: 150,
			scale: 0.85,
		};
		ScrollReveal().reveal(".reveal3", slideUp);

		const platformChange = document.getElementById("platform-change");
		if (platformChange.textContent == 1)
			return (platformChange.innerHTML = "PC");
		if (platformChange.textContent == 2)
			return (platformChange.innerHTML = "Play Station");
		if (platformChange.textContent == 3)
			return (platformChange.innerHTML = "Xbox");
		if (platformChange.textContent == 4)
			return (platformChange.innerHTML = "iOS");
		if (platformChange.textContent == 5)
			return (platformChange.innerHTML = "Apple Macintosh");
		if (platformChange.textContent == 6)
			return (platformChange.innerHTML = "Linux");
		if (platformChange.textContent == 7)
			return (platformChange.innerHTML = "Nintendo");
		if (platformChange.textContent == 8)
			return (platformChange.innerHTML = "Android");
		if (platformChange.textContent == 14)
			return (platformChange.innerHTML = "Web");
	};
	showPlatform();
};

// const logo = document.getElementById("logo");
// logo.addEventListener("click", PageList(9));
