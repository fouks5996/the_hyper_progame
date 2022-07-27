export const mapGenre = (data) => {
	const genreInner = document.getElementById("genres-inner");
	let arr = data.genres.map((el) => el);
	genreInner.innerHTML = arr
		.map(
			(el) => `
         <a href="#genre/${el.slug}" class="content underline transition-trigger" > 
             ${el.name}   
         </a>
      `
		)
		.join(" ");
};
