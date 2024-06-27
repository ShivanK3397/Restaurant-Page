
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
const hourContainer = document.createElement("div");

const hour1 = document.createElement("p");
hour1.textContent="Sunday: 8am - 8pm";
const hour2 = document.createElement("p");
hour2.textContent="Monday: 6am - 6pm";
const hour3 = document.createElement("p");
hour3.textContent="Tuesday: 6am - 6pm";
const hour4 = document.createElement("p");
hour4.textContent="Wednesday: 6am - 6pm";
const hour5 = document.createElement("p");
hour5.textContent="Thursday: 6am - 10pm";
const hour6 = document.createElement("p");
hour6.textContent="Friday: 6am - 10pm";
const hour7 = document.createElement("p");
hour7.textContent="Saturday: 8am - 10pm";
hourContainer.appendChild(hour1);
hourContainer.appendChild(hour2);
hourContainer.appendChild(hour3);
hourContainer.appendChild(hour4);
hourContainer.appendChild(hour5);
hourContainer.appendChild(hour6);
hourContainer.appendChild(hour7);

hour.appendChild(hourHeader);
hour.appendChild(hourContainer);

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