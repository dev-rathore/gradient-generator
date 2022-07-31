
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var direction = document.querySelector("#direction");
var body = document.getElementById("gradient");
var current = document.querySelector(".current");

function setGradient() {
	body.style.background =
  `linear-gradient(${direction.value}deg, ${color1.value} 0%, ${color2.value} 100%)`;

	current.style.background =
  `linear-gradient(${direction.value}deg, ${color1.value} 0%, ${color2.value} 100%)`;
  
	css.textContent = body.style.background;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function copyText() {
	window.getSelection().selectAllChildren(css);
  document.execCommand("Copy")
}