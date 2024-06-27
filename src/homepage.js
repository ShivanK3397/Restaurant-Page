import Background from "./images/resturant.jpg";

function createHomepage(){

const image = new Image();
image.src=Background;

const header = document.createElement("h1");
header.textContent="Johnnys Pizzeria";

const para = document.createElement("p");
para.textContent="Welcome to Johnnys Pizzeria";

const div = document.querySelector("#content");

div.appendChild(header);
div.appendChild(para);
div.appendChild(image);


}

export default createHomepage; 