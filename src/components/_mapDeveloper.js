import { transitionLayer } from "../components/_transition_layer";

export const mapDeveloper = (data) => {
	const developerInner = document.getElementById("developer-inner");
	let arr = data.developers.map((el) => el);
	developerInner.innerHTML = arr
		.map(
			(el) => `
         <a href="#developer/${el.slug}" class="content underline transition-trigger" > 
             ${el.name}   
         </a>
      `
		)
		.join(" ");
	transitionLayer();
};
