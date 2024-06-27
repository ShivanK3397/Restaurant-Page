import createHomepage from "./homepage.js";
import createMenu from "./menu.js";
import deleteContent from "./delete.js";
import createContact from "./contact.js";

createHomepage();

const menu = document.querySelector("#menu");
let menuSelected = false;
menu.addEventListener("click",()=>{
    if (menuSelected){

    }
    else{
    deleteContent();
    createMenu();
    menuSelected=true;
    homeSelected=false;
    contactSelected=false;
    }
});

const home = document.querySelector("#home");
let homeSelected = true;
home.addEventListener("click",()=>{
    if(homeSelected){

    }
    else{
        deleteContent();
        createHomepage();
        homeSelected=true;
        menuSelected=false;
        contactSelected=false;
    }
});

const contact = document.querySelector("#contact");
let contactSelected=false;
contact.addEventListener("click",()=>{
    if (contactSelected){
       
    }
    else{
    deleteContent();
    createContact();
    contactSelected=true;
    menuSelected=false;
    homeSelected=false;
    }
});
