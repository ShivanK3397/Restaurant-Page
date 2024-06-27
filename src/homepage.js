import Background from "./images/resturant.jpg";
import "./styles.css";

function createHomepage(){


const header = document.createElement("h1");
header.textContent="Shivan's Breakfast Bar";

const para = document.createElement("p");
para.textContent="Welcome to Shivan's Breakfast Bar";

const div = document.querySelector("#content");

div.appendChild(header);
div.appendChild(para);



}

export default createHomepage; 