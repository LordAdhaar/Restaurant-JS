export default function buttonLoader(){

    //creating button div and buttons
    let home = document.createElement("button");
    let programmes = document.createElement("button");
    let aboutUs = document.createElement("button");

    //adding classes to buttons
    home.classList.add("home");
    programmes.classList.add("programmes");
    aboutUs.classList.add("aboutUs");

    // adding innerHTML to buttons
    home.innerHTML="HOME";
    programmes.innerHTML="PROGRAMMES";
    aboutUs.innerHTML="ABOUT US";

    //adding button to our div
    let buttons = document.querySelector("#buttons");
    buttons.appendChild(home);
    buttons.appendChild(programmes);
    buttons.appendChild(aboutUs);
}