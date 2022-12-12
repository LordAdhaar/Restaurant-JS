import Icon from "./wallet.png"

export default function homepageLoader(){

    console.log("I am the homepage");

    //loading the image
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add("myIcon");
  

    //creating first part of the homepage
    let homepage = document.createElement("div");

    //intro the homepage
    let Intro = document.createElement("div");
    let IntroText = document.createElement("div");
    let IntroHeading = document.createElement("h1");
    let IntroPara = document.createElement("p");
    let getStarted = document.createElement("button");
    let content = document.querySelector("#content");

    // adding divider
    let divider = document.createElement("div");

    let dOne = document.createElement("div");
    let dTwo = document.createElement("div");
    let dThree = document.createElement("div");

    let dOneHeading = document.createElement("h3");
    let dTwoHeading = document.createElement("h3");
    let dThreeHeading = document.createElement("h3");
    
    let dOnePara = document.createElement("p");
    let dTwoPara = document.createElement("p");
    let dThreePara = document.createElement("p")

    
    //adding text to each 
    homepage.classList.add("homepage");
    Intro.classList.add("Intro")
    IntroText.classList.add("IntroText");
    IntroHeading.classList.add("IntroHeading");
    IntroPara.classList.add("IntroPara");
    getStarted.classList.add("getStarted");
    
    
    divider.classList.add("divider");
    dOne.classList.add("dOne");
    dTwo.classList.add("dTwo");
    dThree.classList.add("dThree");

    console.log(IntroHeading,IntroPara,homepage);

    //adding text to each
    IntroHeading.innerHTML = "THIS IS YOUR FINAL CHANCE TO FIGHT THE BIGGEST LIE IN THE WORLD, MONEY"
    IntroPara.innerHTML = "JOIN THE REVOLUTION NOW, <br> RESIST THE SLAVE MIND.";
    getStarted.innerHTML = "JOIN NOW";

    //divider text addition
    dOneHeading.innerHTML = "₹420,00,000 Cr";
    dTwoHeading.innerHTML = "101+";
    dThreeHeading.innerHTML = "69+ Cr"

    dOnePara.innerHTML = "Daily volume trader";
    dTwoPara.innerHTML = "Countries supported";
    dThreePara.innerHTML = "Verified MILFS";

    //appending
    IntroText.appendChild(IntroHeading);
    IntroText.appendChild(IntroPara);
    IntroText.appendChild(getStarted);
    Intro.appendChild(IntroText);
    Intro.appendChild(myIcon);
    homepage.appendChild(Intro);
    content.appendChild(homepage);

    dOne.appendChild(dOneHeading);
    dOne.appendChild(dOnePara);

    dTwo.appendChild(dTwoHeading);
    dTwo.appendChild(dTwoPara);

    dThree.appendChild(dThreeHeading);
    dThree.appendChild(dThreePara);

    divider.appendChild(dOne);
    divider.appendChild(dTwo);
    divider.appendChild(dThree);


    homepage.appendChild(divider);
    
}
