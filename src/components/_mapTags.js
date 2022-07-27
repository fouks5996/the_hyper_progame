export const mapTags = (data) => {
	const tagInner = document.getElementById("tags-inner");
	let arr = data.tags.map((el) => el);
	tagInner.innerHTML = arr
		.map(
			(el) => `
         <a href="#tag/${el.slug}" class="content underline transition-trigger" > 
             ${el.name}   
         </a>
      `
		)
		.join(" ");
};
