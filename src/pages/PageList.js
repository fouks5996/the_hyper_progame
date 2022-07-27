import { searchTrigger } from "../components/_search";
import { showTitles } from "../components/_content";
import { concatArray } from "../components/_concat";
import { getParentPlatformsName } from "../components/_platforms_name";
import { filterPlatform } from "../components/_filter";
import { scrollToTop } from "../components/_scrollToTop";

export const PageList = () => {
	scrollToTop();
	// VARIABLES
	const API_KEY = process.env.API_KEY;
	let url1 = `https://api.rawg.io/api/games?key=${API_KEY}&page=1`;
	let url2 = `https://api.rawg.io/api/games?key=${API_KEY}&page=2`;
	let dataArray,
		dataArray2,
		bigArray = [];

	// DOM ELEMENTS
	const articleContent = document.getElementById("article");
	const pageDetail = document.getElementById("page-detail");
	const titlePageList = document.getElementById("title-page-list");
	const listContent = document.getElementById("list-content");
	const pagePublisher = document.getElementById("page-publisher");
	const publisherTitle = document.getElementById("publisher-title");
	publisherTitle.style.display = "none";
	listContent.style.display = "";
	pagePublisher.style.display = "none";

	//FETCH LIST
	const fetchList = async (url) => {
		await fetch(url)
			.then((response) => response.json())
			.then((responseData) => {
				dataArray = responseData.results;
			});
	};

	const fetchList1 = async (url) => {
		await fetch(url)
			.then((response) => response.json())
			.then((responseData) => {
				dataArray2 = responseData.results;
			});
	};

	// RENDER TITLE
	showTitles(pageDetail, titlePageList);

	// RENDER FILTRES

	// RENDER SEARCH
	const input = document.getElementById("myInput");
	input.addEventListener("keyup", searchTrigger);

	// SEE MORE
	const seeMore = document.getElementById("see-more");
	const seeMore1 = document.getElementById("see-more1");
	seeMore.style.display = "";
	seeMore1.style.display = "none";

	seeMore.addEventListener("click", function () {
		renderList(18);
		seeMore.style.display = "none";
		seeMore1.style.display = "";
	});

	seeMore1.addEventListener("click", function () {
		renderList(27);
		seeMore1.style.display = "none";
	});

	//*******************
	//RENDER GENERAL
	//*******************
	const renderList = async (num) => {
		await fetchList(url1);
		await fetchList1(url2);

		bigArray = concatArray(bigArray, dataArray, dataArray2, num);

		const inputNodeList = Array.from(document.getElementsByName("filtered"));
		setTimeout(() => {
			filterPlatform(inputNodeList, bigArray, seeMore, seeMore1);
		}, "1000");

		articleContent.innerHTML = bigArray
			.map(
				(article) => `
			<article  class="cardGame" >
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
						<p class="hover-content">  ${article.tags.map((el) => el.name)}votes</p>
					</div>
				</div>
				
			</article>`
			)
			.join(" ");
	};
	renderList(9);
};
