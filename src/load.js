export default function loader(){


    //creating elements
    let heading = document.createElement("h1");
    let slogan = document.createElement("h3");
    let description = document.createElement("p");

    //adding class
    heading.classList.add("heading");
    slogan.classList.add("slogan");
    description.classList.add("description");
    
    //adding text to elements
    heading.innerHTML = "APNA BANK";
    slogan.innerHTML = "Apna Bank, Apne Jaisa";
    description.innerHTML = "Your own De-Fi Bank, where your money is yours.";

    //appending elements to content
    let introduction = document.querySelector("#introduction");
    introduction.appendChild(heading);
    introduction.appendChild(slogan);
    introduction.appendChild(description);
}