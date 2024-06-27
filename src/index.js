import createHomepage from "./homepage.js";
import createMenu from "./menu.js";
import deleteContent from "./delete.js";

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
    }
})

const home = document.querySelector("#home");
let homeSelected = true;
home.addEventListener("click",()=>{
    if(homeSelected){

    }
    else{
        deleteContent();
        createHomepage();
        homeSelected=true;
    }
})
