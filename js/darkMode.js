document.addEventListener("DOMContentLoaded", init);

function init() {
    let darkToggleHome = document.getElementById("darkModeBtn");
    darkToggleHome.addEventListener("click", darkMode);
    checkDarkActive();
}

let toggleCheck = false;

function checkDarkActive(){
    if(localStorage.getItem("dark-mode") === "true"){
      darkMode();
    }
}

function darkMode() {
    let {btnElements} = getIndexDocElements();
    let {label, legend} = uniqueDocElements();
    for (let i = 0; i < btnElements.length; i++) {
       let darkModeAdded =  btnElements[i].classList.toggle("button-dark");
       if(!darkModeAdded){
        toggleCheck = false;
        localStorage.setItem("dark-mode", toggleCheck);
       }
       else{
        toggleCheck = true;
        localStorage.setItem("dark-mode", toggleCheck);
       }
    }
    if(label && legend === null){
        darkModeCommonElements();
        cardDark();
        nameCardDark();
        h2Dark();
        pDark();
        footerDark();
        canvasDark();
    } else {
        labelDark();
        darkModeCommonElements();
        cardDark();
        nameCardDark();
        h2Dark();
        pDark();
        footerDark();
        canvasDark();
    }
        }

function darkModeCommonElements(){
    let { body, footer, toggleHome} = getCommonDocElements();
    body.classList.toggle("body-dark");
    // footer.classList.add("p-dark");
    toggleHome.classList.add("active");

}
function cardDark(){
    let {card} = getCommonDocElements();
    for(let j=0; j < card.length; j++){
        card[j].classList.toggle("card-dark");
        // nameCard[j].classList.toggle("card-dark");
    }
}
function nameCardDark(){
    let {nameCard} = getCommonDocElements();
    for(let t=0; t < nameCard.length; t++){
        // nameCard[t].classList.remove("name-card");
        nameCard[t].classList.toggle("name-card-dark");
     }
}

function h2Dark(){
    let {h2} = getCommonDocElements();
    for(let h=0; h < h2.length; h++){
        h2[h].classList.toggle("h2-dark");
     }
}

function pDark(){
    let {p} = getCommonDocElements();
    for(let n=0; n < p.length; n++){
        p[n].classList.toggle("p-dark");
        console.log("p");
    }
}
function footerDark(){
    let footerP = document.getElementById("footer").querySelectorAll("p");
    for (let j= 0; j < footerP.length; j++){
        footerP[j].classList.remove("p-dark");
        footerP[j].classList.toggle("p-dark-footer");
    }
}


function labelDark(){
    let {label, legend} = uniqueDocElements();
    for(let k=0; k < label.length; k++){
        label[k].classList.toggle("label-dark");
    }
    legend.classList.toggle("legend-dark");
}

function getCommonDocElements(){
    let toggleHome = document.getElementById("darkModeBtn");
    let body = document.querySelector("body");
    let card = document.querySelectorAll(".card");
    let nameCard = document.querySelectorAll(".name-card");
    let h2 = document.querySelectorAll("h2");
    let p = document.querySelectorAll("p");
    let btnElement = document.querySelector(".btn");
    let footer = document.querySelector("#footer");
    let mainNav = document.querySelectorAll(".mainNav");
    //let pBold = document.querySelectorAll(".bold-text");
    return { toggleHome, body, card, h2, p, btnElement, footer, nameCard, mainNav };
}

function uniqueDocElements(){
    let label = document.querySelectorAll("label");
    let legend = document.querySelector("legend");
    return { label, legend };
}


function getIndexDocElements() {
    let btnElements = document.querySelectorAll(".btn-primary");
    return {btnElements};

}
function canvasDark(){
    const canvas = document.querySelector(".canvas");
    let ctx = canvas.getContext("2d");
    if(localStorage.getItem("dark-mode") === "true"){
        canvas.classList.toggle("canvas-dark");
        ctx.fillStyle = "orangered";
    } else{
        canvas.classList.toggle("canvas-dark");
        ctx.fillStyle = "#0d6efd";
    }
}
