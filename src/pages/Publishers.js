import { PageList } from "./PageList";
import { getParentPlatformsName } from "../components/_platforms_name";
import { transString } from "../components/_transformString";

export const Publishers = (argument) => {
	const API_KEY = process.env.API_KEY;

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

	let url1 = `https://api.rawg.io/api/games?key=${API_KEY}&publishers=${argument}`;

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
      <h1 class="title-white" style="margin-left:45px; margin-bottom: 30px"> Les titres de ${transString(
				argument
			)} </h1>
      `;

		pagePublisher.innerHTML = array1
			.map(
				(article) => `
            
            <article class="cardGame" >
				<a href="#pagedetail/${article.id}" id="scroll-to">                  
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
	};

	RenderPublishers();
};

const logo = document.getElementById("logo");
logo.addEventListener("click", PageList(9));
