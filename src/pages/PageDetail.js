import { PageList } from "./PageList";
import { mapPublisher } from "../components/_mapPublishers";
import { mapPlatform } from "../components/_mapPlatform";
import { mapGenre } from "../components/_mapGenres";
import { mapTags } from "../components/_mapTags";
import { mapDeveloper } from "../components/_mapDeveloper";
import { scrollToTop } from "../components/_scrollToTop";
import { transitionLayer } from "../components/_transition_layer";

export const PageDetail = (argument) => {
	scrollToTop();
	// VARIABLES
	const API_KEY = process.env.API_KEY;
	const cleanedArgument = argument.trim().replace(/\s+/g, "-");
	let data = [];
	let descriptionItem = [];
	const publisherTitle = document.getElementById("publisher-title");
	const pagePublisher = document.getElementById("page-publisher");
	publisherTitle.style.display = "none";
	pagePublisher.style.display = "none";

	// FETCH GAMES
	const fetchGame = async (url, argument) => {
		await fetch(`${url}/${argument}?key=${API_KEY}`)
			.then((response) => response.json())
			.then((responseData) => {
				data = responseData;
			});
	};

	//*******************
	// FUNCTIONS
	//*******************

	const getDescriptionItem = (data, splitted) => {
		let descriptionSplitted = data.description.split(splitted);
		descriptionSplitted.map((element) => {
			descriptionItem.push(element.replace(/<p>/, ""));
		});
		return descriptionItem;
	};

	const getGenres = (data) => {
		return data.genres.map((el) => el.name);
	};
	//*******************
	//RENDER STORES
	//*******************
	let storeArray = [];
	const fetchStore = async (argument) => {
		await fetch(
			`https://api.rawg.io/api/games/${argument}/stores?key=${API_KEY}`
		)
			.then((res) => res.json())
			.then((res) => {
				return (storeArray = res.results);
			});
	};

	const renderStore = async () => {
		await fetchStore(cleanedArgument);

		const storeData = document.getElementById("buy-data");
		console.log(storeArray);

		storeData.innerHTML = storeArray
			.map(
				(el) => `
			<a href=${el.url} target="_blank" class="content underline" > 
			 💶 ${el.url
					.replace("https://", "")
					.replace("http://", "")
					.split("/")
					.shift()}    
	  		</a>
		`
			)
			.join("");
	};

	//*******************
	//RENDER TRAILER
	//*******************
	let trailerArray = [];

	const fetchTrailer = async (argument) => {
		await fetch(
			`https://api.rawg.io/api/games/${argument}/movies?key=${API_KEY}`
		)
			.then((res) => res.json())
			.then((res) => {
				trailerArray = res.results;
			});
	};

	const renderTrailer = async () => {
		await fetchTrailer(cleanedArgument);

		const trailerData = document.getElementById("movie-data");
		trailerData.innerHTML = `
		<source src="${trailerArray[0].data.max}" type="video/mp4">
		`;
	};

	//*******************
	//RENDER SCREENSHOTS
	//*******************
	let screenShotsArray = [];

	const fetchscreenShots = async (argument) => {
		await fetch(
			`https://api.rawg.io/api/games/${argument}/screenshots?key=${API_KEY}`
		)
			.then((res) => res.json())
			.then((res) => {
				screenShotsArray = res.results;
			});
	};

	const renderscreenShots = async () => {
		await fetchscreenShots(cleanedArgument);

		const screenShotsData = document.getElementById("screenshots-grid");

		screenShotsData.innerHTML = screenShotsArray
			.map(
				(element) => `
			<img src="${element.image}" > </img>
		`
			)
			.join(" ");
	};

	//*******************
	//RENDER Similar Games
	//*******************
	let similarGameArray = [];

	const fetchsimilarGame = async (argument) => {
		await fetch(
			`https://api.rawg.io/api/games/${argument}/game-series?key=${API_KEY}`
		)
			.then((res) => res.json())
			.then((res) => {
				similarGameArray = res.results;
			});
	};

	const rendersimilarGame = async () => {
		await fetchsimilarGame(cleanedArgument);

		const similarGameData = document.getElementById("similar-game");
		similarGameArray.splice(5);

		similarGameData.innerHTML = similarGameArray
			.map(
				(article) =>
					`<article class="cardGame" >
					<a href="#pagedetail/${article.id}" id="scroll-to">                  
						<img class="item-image" src=${article.background_image}></img>
						<h1 class="movie-title">${article.name}</h1>
					</a>
					<div class="layer-info">
						<div style="padding:22px">
							<p class="hover-info">  ${article.released} </p>
							<p class="hover-info">  ${article.rating}/5 - ${article.ratings_count} votes</p>
							<p class="hover-content">  ${article.tags.map((el) => el.name)}votes</p>
						</div>
					</div>
				</article>`
			)
			.join(" ");
	};

	//*******************
	//RENDER GENERAL
	//*******************
	const render = async () => {
		await fetchGame("https://api.rawg.io/api/games", cleanedArgument);

		const pageDetail = document.getElementById("page-detail");
		const titlePageList = document.getElementById("title-page-list");
		const listContent = document.getElementById("list-content");
		const article = document.getElementById("article");
		const seeMore = document.getElementById("see-more");
		const seeMore1 = document.getElementById("see-more1");

		if (data.description.match("<br />")) {
			getDescriptionItem(data, "<br />");
		} else {
			getDescriptionItem(data, "</p>");
		}

		renderStore();
		renderTrailer();
		renderscreenShots();
		rendersimilarGame();

		seeMore1.style.display = "none";
		seeMore.style.display = "none";
		titlePageList.innerHTML = "";
		article.innerHTML = "";
		listContent.style.display = "none";

		setTimeout(() => {
			mapPublisher(data);
			mapPlatform(data);
			mapGenre(data);
			mapTags(data);
			mapDeveloper(data);
		}, "500");

		pageDetail.innerHTML = `
		    <section class="page-detail">
				<div class="img-wrapper">  
					<img class="detail-image" src=${data.background_image}></img>
					<a href=${data.website} target="_blank" id="game-website"> Check Website </a>
				</div>

				<div class="page-detail-wrapper">
					<div class="page-detail-text">
						<h1 class="title-white"> ${data.name} </h1>
						<h2 class="rating-pdp" > ${data.rating}/5 - ${data.ratings_count} votes </h2>
						<div class="content-wrapper">
							<p class="content"> ${descriptionItem[0]}  </p>
							<div> 
								<p class="content-title"> Plot </p>
								<p class="content"> ${descriptionItem[1]}  </p>
							</div>
							<div> 
								<p class="content-title"> Gameplay </p>
								<p class="content"> ${descriptionItem[2]}  </p>
							</div>
						</div>
						<div class="page-detail-infos">
							<div class="page-detail-info"> 
								<p class="content-title"> Released Date </p>
								<p class="content"> ${data.released} </p> 
							</div>
							<div class="page-detail-info"> 
								<p class="content-title"> Developer </p>
								<div id="developer-inner" >  </div>
							</div>
							<div class="page-detail-info"> 
								<p class="content-title"> Platform </p>
								<div id="platforms-inner"> </div>
								<p class="content"> </p>
							</div>
							<div class="page-detail-info"> 
								<p class="content-title"> Publisher </p>
								<div id="publisher-inner"> </div>
								
							</div>
							<div class="page-detail-info"> 
								<p class="content-title"> Genre </p>
								<div id="genres-inner"> </div>
							</div>
							<div class="page-detail-info"> 
								<p class="content-title"> Tags </p>
								<div id="tags-inner"> </div>
							</div>
						</div>
						<div class="section">
							<h2 class="subject-title"> Buy </h2>
							<div class="content" id="buy-data">   </div>
						</div>
						<div class="section">
							<h2 class="subject-title"> Trailer </h2>
							<video controls width="1250" id="movie-data">
    							
							</video>
						</div>
						<div class="section">
							<h2 class="subject-title"> Screenshots </h2>
							<div id="screenshots-grid">

							</div>
						</div>
						<div class="section">
							<h2 class="subject-title"> Similar Games </h2>
							<div id="similar-game"> </div>
						</div>
					</div>
				</div>
		    </section>
		  `;
		transitionLayer();
	};
	render();
};
const logo = document.getElementById("logo");
logo.addEventListener("click", function () {
	PageList(9);
	// transitionLayer();
});
