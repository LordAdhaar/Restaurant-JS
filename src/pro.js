import swapImage from "./swap.png"
import earnImage from "./earn.png";

export default function proLoader(){
    console.log("hello i am pro");

    const mySwap = new Image();
    mySwap.src = swapImage;
    mySwap.classList.add("swapImg")

    const myEarn = new Image();
    myEarn.src = earnImage;
    myEarn.classList.add("earnImg");

    // forming the structure
    let pro = document.createElement("div");
    let content = document.querySelector("#content");

    //wallet 
    let wallet = document.createElement("div");
    let walletHeading = document.createElement("h3");
    let walletText = document.createElement("h1");

    //swap
    let swap = document.createElement("div");
    let swapHeading = document.createElement("h1");
    let swapText = document.createElement("p");

    //earn 
    let earn = document.createElement("div");
    let earnHeading = document.createElement("h1");
    let earnText = document.createElement("p");

    // adding classes
    pro.classList.add("pro");
    wallet.classList.add("wallet");
    walletHeading.classList.add("walletHeading");
    walletText.classList.add("walletText");
    swap.classList.add("swap");
    swapHeading.classList.add("swapHeading");
    swapText.classList.add("swaptext");
    earn.classList.add("earn");
    earnHeading.classList.add("earnHeading");
    earnText.classList.add("earnText");

    //wallet content
    walletHeading.innerHTML="Aapka De-Fi Wallet";
    walletText.innerHTML = "YOUR KEYS, <br> YOUR CRYPTO";

    //swap content
    swapHeading.innerHTML = "SWAP";
    swapText.innerHTML = "Swap 1000+ tokens across multiple chains,<br> including Ethereum, Cronos, Cosmos and more";
    
    //earn content
    earnHeading.innerHTML = "EARN";
    earnText.innerHTML = "Earn rebates on 25+ tokens, including CRO, VVS, <br> TONIC,  ATOM, and a host of stablecoins.";

    //appending elements
    wallet.appendChild(walletHeading);
    wallet.appendChild(walletText);
    
    //swap elements appending
    swapHeading.appendChild(swapText);
    swap.appendChild(swapHeading);
    swap.appendChild(mySwap);

    //appending earn elements
    earnHeading.appendChild(earnText);
    earn.appendChild(earnHeading);
    earn.appendChild(myEarn);

    pro.appendChild(wallet);
    pro.appendChild(swap);
    pro.appendChild(earn);
    content.appendChild(pro);

}