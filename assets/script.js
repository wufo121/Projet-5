const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const numberSlides = slides.length;
const text = document.querySelector("#banner p");
const slideImg = document.querySelector(".banner-img");




arrowLeft.addEventListener("click", function() {
	dotLeft = 0;
	for (let i=0; i<numberSlides; i++){
		lookDot = allDot[i].classList;
		if (lookDot.contains("dot_selected")){
			dotLeft = i;
		}
	}
	allDot[dotLeft].classList.remove("dot_selected");
	if (dotLeft==0) {
		dotLeft=numberSlides-1;
		
	} 
	else {dotLeft--;}
	allDot[dotLeft].classList.add("dot_selected");

	slideImg.setAttribute("src", "assets/images/slideshow/"+slides[dotLeft].image);
	text.innerHTML = slides[dotLeft].tagLine;
})

arrowRight.addEventListener("click",function() {
	dotRight = 0;
	for (let i=1; i<numberSlides; i++){
		lookDot = allDot[i].classList;
		if (lookDot.contains("dot_selected")){
			dotRight = i;
		}
	}
	allDot[dotRight].classList.remove("dot_selected");
	if (dotRight==numberSlides-1) {
		dotRight = 0;
	}
	else {dotRight++;}
	allDot[dotRight].classList.add("dot_selected");

	slideImg.setAttribute("src", "assets/images/slideshow/"+slides[dotRight].image);
	text.innerHTML = slides[dotRight].tagLine;
})


for (let i=0; i<numberSlides; i++){
	const unfillDot = document.createElement("span");
	dots.appendChild(unfillDot);
	unfillDot.classList.add("dot");
}


allDot = document.querySelectorAll(".dot")

allDot[0].classList.add("dot_selected")


