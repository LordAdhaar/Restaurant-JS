export default function loader(){
    
    //creating elements
    let heading = document.createElement("h1");
    let slogan = document.createElement("h3");
    let description = document.createElement("p");
    
    //adding text to elements
    heading.innerHTML = "APNA BANK";
    slogan.innerHTML = "Apna Bank, Apne Jaisa";
    description.innerHTML = "Your own De-Fi Bank, where your money is yours.";

    //appending elements to content
    let container = document.querySelector("#container");
    container.appendChild(heading);
    container.appendChild(slogan);
    container.appendChild(description);
}