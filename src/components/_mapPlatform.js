import { getParentPlatforms } from "./_platform";

export const mapPlatform = (data) => {
	const platformInner = document.getElementById("platforms-inner");
	platformInner.innerHTML = getParentPlatforms(data).map(
		(el) =>
			`
         <a href="#platform/${el.id}" class="content underline transition-trigger" > 
         ${el.name} 
         </a>
      `
	);
};
