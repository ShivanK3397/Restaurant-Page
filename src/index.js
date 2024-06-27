import Background from "./images/resturant.jpg";
const image = new Image();
image.src=Background;

const div = document.querySelector("#content");
div.appendChild(image);