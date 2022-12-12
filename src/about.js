export default function about(){

    let about = document.createElement("div");
    let content = document.querySelector("#content");

    //creating mission
    let mission = document.createElement("div");
    let missionHeading = document.createElement("h3");
    let missionText = document.createElement("h2");

    //purpose
    let purpose = document.createElement("div");
    let purposeHeading = document.createElement("h3");
    let purposeText = document.createElement("h2");

    about.classList.add("about");
    
    // adding mission classes
    mission.classList.add("mission");
    missionHeading.classList.add("missionHeading");
    missionText.classList.add("missionText");

    //purpose classes
    purpose.classList.add("purpose");
    purposeHeading.classList.add("purposeHeading");
    purposeText.classList.add("purposeText");

    // adding mission text
    missionHeading.innerHTML="OUR MISSION";
    missionText.innerHTML="Accelerate the world's ascent to cryptocurrency.";

    purposeHeading.innerHTML="WHY IT MATTERS";
    purposeText.innerHTML = "Powered by cryptocurrency, the future of the internet: Web3 will be more fair and equitable, owned by the builders, creators and users.<br> YOU. <br><br>We believe it is your basic right to control your money, data and identity. "


    //appending children
    missionHeading.appendChild(missionText);
    mission.appendChild(missionHeading);

    purposeHeading.appendChild(purposeText);
    purpose.appendChild(purposeHeading);

    about.appendChild(mission);
    about.appendChild(purpose);
    content.appendChild(about);
}