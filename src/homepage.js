
import "./styles.css";

function createHomepage(){


const header = document.createElement("h1");
header.textContent="Shivan's Breakfast Bar";


const messageContainer =document.createElement("div");
const para = document.createElement("p");
para.textContent="Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
messageContainer.appendChild(para);

const hour =document.createElement("div");
const hourHeader = document.createElement("h2");
hourHeader.textContent="Hours";
const hourPara = document.createElement("p");
hour.appendChild(hourHeader);
hour.appendChild(hourPara);

const location = document.createElement("div");
const locationHeader = document.createElement("h2");
locationHeader.textContent="Location";
const locationPara = document.createElement("p");
locationPara.textContent="123 Forest Drive, Forestville, Maine";
location.appendChild(locationHeader);
location.appendChild(locationPara);

const div = document.querySelector("#content");
div.appendChild(header);
div.appendChild(messageContainer);
div.appendChild(hour);
div.appendChild(location);




}

export default createHomepage; 