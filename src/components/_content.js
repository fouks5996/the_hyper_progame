export const showTitles = (toEmpty, toInner) => {
	toEmpty.innerHTML = "";
	toInner.innerHTML = `
			<h1 class="title-white reveal1">Welcome,</h1>
			<p class="content reveal2">
				The Hyper Progame is the world’s premier event for computer and video
				games and related products. At The Hyper Progame, the video game
				industry’s top talent pack the Los Angeles Convention Center,
				connecting tens of thousands of the best, brightest, and most
				innovative in the interactive entertainment industry. For three
				exciting days, leading-edge companies, groundbreaking new
				technologies, and never-before-seen products will be showcased. The
				Hyper Progame connects you with both new and existing partners,
				industry executives, gamers, and social influencers providing
				unprecedented exposure to the entire video game industry, all under
				one roof. This text seems familiar.
			</p>
			<div id="list-filter" class="reveal4">
				<p id="platform-name"> Filtrer </p>
				<svg
					width="10"
					height="18"
					viewBox="0 0 10 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0 7L5 0L10 7H0ZM10 11L5 18L0 11H10Z"
						fill="white"
					/>
				</svg>
				<div class="layer-sort">
					<div class="input-wrapper">
						<input type="radio" id="switch" name="filtered" value="Nintendo">
						<label class="labels" for="switch">Nintendo Switch</label>
					</div>
					<div class="input-wrapper">
						<input type="radio" id="pc" name="filtered" value="PC">
						<label class="labels"  for="pc">PC</label>
					</div>
					<div class="input-wrapper">
						<input type="radio" id="xbox" name="filtered" value="Xbox">
						<label class="labels"  for="xbox">Xbox</label>
					</div>
					<div class="input-wrapper">
						<input type="radio" id="ps" name="filtered" value="PlayStation">
						<label class="labels"  for="ps">PlayStation</label>
					</div>
					<div class="input-wrapper">
						<input type="radio" id="Linux" name="filtered" value="Linux">
						<label class="labels"   for="Linux">Linux</label>
					</div>
					<div class="input-wrapper">
						<input type="radio" id="mac" name="filtered" value="Apple Macintosh">
						<label class="labels"  for="mac">Apple Macintosh</label>
					</div>
					<p class="reset-all" id="reset-btn"> Reset</p>
				</div>
			</div>
			<br>
			<lottie-player
			id="lottie-player"
			class="reveal4"
			src="https://assets2.lottiefiles.com/datafiles/w8kbBwzPRk7sTCe/data.json"
			background="transparent"
			speed="1"
			style="width: 300px; height: 300px"
			loop
			autoplay
		></lottie-player>
	`;

	var slideUp = {
		distance: "20%",
		origin: "bottom",
		opacity: 0,
		delay: 400,
	};
	var slideUp1 = {
		distance: "20%",
		origin: "bottom",
		opacity: 0,
		delay: 600,
	};
	var slideUp2 = {
		distance: "20%",
		origin: "bottom",
		opacity: 0,
		delay: 800,
	};
	ScrollReveal().reveal(".reveal1", slideUp);
	ScrollReveal().reveal(".reveal2", slideUp1);
	ScrollReveal().reveal(".reveal4", slideUp2);
};
