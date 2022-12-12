import loader from "./load.js";
import "./style.css";
import buttonLoader from "./button.js";
import homepageLoader from "./homepage.js";
import proLoader from "./pro.js";
import about from "./about.js"; 

console.log("Hi my");

// call loader to load the intro
loader();
buttonLoader();

homepageLoader();
proLoader();
about();


let programmeButton = document.querySelector(".programmes");
let homeButton = document.querySelector(".home");
let aboutButton = document.querySelector(".aboutUs");

let homepage = document.querySelector(".homepage");
let pro = document.querySelector(".pro");
let aboutPage = document.querySelector(".about");

homeButton.addEventListener("click",homeClicked);
programmeButton.addEventListener("click",programmeClicked);
aboutButton.addEventListener("click",aboutClicked);

function homeClicked(){
    homepage.style.display="block";
    pro.style.display="none";
    aboutPage.style.display="none";
}

function programmeClicked(){
    pro.style.display = "flex";
    homepage.style.display="none";
    aboutPage.style.display="none";
}

function aboutClicked(){
    aboutPage.style.display="block";
    pro.style.display="none";
    homepage.style.display="none"; 
}

console.log(document.querySelector(".heading"),document.querySelector("h3"))
console.log(document.querySelector("#buttons"));