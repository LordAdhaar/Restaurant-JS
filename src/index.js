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

function homeClicked(){

}

function programmeClicked(){
}

function aboutLoader(){
}

console.log(document.querySelector(".heading"),document.querySelector("h3"))
console.log(document.querySelector("#buttons"));