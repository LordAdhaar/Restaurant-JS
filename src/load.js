export default function loader(){


    //creating elements
    let heading = document.createElement("h1");
    /*let slogan = document.createElement("h3");*/

    //adding class
    heading.classList.add("heading");
    /*slogan.classList.add("slogan");*/
    
    //adding text to elements
    heading.innerHTML = "APNA BANK";
    /*slogan.innerHTML = "Apna Bank, Apne Jaisa";*/

    //appending elements to content
    let introduction = document.querySelector("#introduction");
    introduction.appendChild(heading);
    /*introduction.appendChild(slogan);*/
}