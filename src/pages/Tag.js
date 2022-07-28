// import { PageList } from "./PageList";
import { getParentPlatformsName } from "../components/_platforms_name";
import { transString } from "../components/_transformString";
import { scrollToTop } from "../components/_scrollToTop";
import { transitionLayer } from "../components/_transition_layer";

export const Tag = (argument) => {
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

	let url1 = `https://api.rawg.io/api/games?key=${API_KEY}&tags=${argument}`;

	let array1 = [];
	//Fetch
	const fetchPublishers1 = async (url) => {
		await fetch(url)
			.then((res) => res.json())
			.then((response) => (array1 = response.results));
	};

	// Render

	const RenderPublishers = async () => {
		await fetchPublishers1(url1);

		publisherTitle.innerHTML = `
      <h1 class="title-white" style="margin-left:45px; margin-bottom: 30px"> Tous les titres avec le tag <span class="text-underline"> ${transString(
				argument
			)}  </span> </h1>
      `;

		pagePublisher.innerHTML = array1
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
	};

	RenderPublishers();
};
// const logo = document.getElementById("logo");
// logo.addEventListener("click", PageList(9));
