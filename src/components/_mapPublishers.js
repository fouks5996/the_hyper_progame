export const mapPublisher = (data) => {
	const publisherInner = document.getElementById("publisher-inner");
	let arr = data.publishers.map((el) => el);
	publisherInner.innerHTML = arr
		.map(
			(el) => `
         <a href="#publishers/${el.slug}" class="content underline transition-trigger" > 
             ${el.name}   
         </a>
      `
		)
		.join(" ");
};
