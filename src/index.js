import loader from "./load.js";
import "./style.css";
import buttonLoader from "./button.js";
import homepageLoader from "./homepage.js";
import proLoader from "./pro.js";

console.log("Hi my");

// call loader to load the intro
loader();
buttonLoader();
proLoader();


console.log(document.querySelector(".heading"),document.querySelector("h3"))
console.log(document.querySelector("#buttons"));