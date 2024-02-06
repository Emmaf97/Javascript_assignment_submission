// document.addEventListener("DOMContentLoaded", () => {
//     if (document.getElementById("darkModeBtn")) {
//         initIndex();
//     } else if (document.getElementById("darkModeBtnRules")) {
//         initRules();
//     }
// });

// function initRules() {
//     let darkToggleRules = document.getElementById("darkModeBtnRules");
//     darkToggleRules.addEventListener("click", darkMode);
// }

document.addEventListener("DOMContentLoaded", init);
// document.addEventListener("DOMContentLoaded", checkDarkActive);
// window.onload = function(){
//     init();
// }

function init() {
    let darkToggleHome = document.getElementById("darkModeBtn");
    darkToggleHome.addEventListener("click", darkMode);
    //darkToggleHome.addEventListener("click", checkDarkActive)
}

let toggleCheck = false;
function toggleCheckActive(){
    return toggleCheck;
}
function checkDarkActive(){
    let aElements = document.querySelectorAll(".btn-primary");
    // if(aElements.classList.contains("button-dark")){
    //     darkMode();
    //     console.log("true value");
    // } else {
    //     darkMode();
    //     console.log("false value");
    // }
    console.log(aElements);
    //let {btnElements} = getIndexDocElements();
    //     for (i = 0; i < btnElements.length; i++) {
    //      btnElements[i].classList.toggle("button-dark");
    //      if(toggleCheck === true){
    //     }
    // }
    // else{
    //     console.log("Not calling function correctly");
    // }
}

function darkMode() {
    let {btnElements} = getIndexDocElements();
    for (i = 0; i < btnElements.length; i++) {
       let darkModeAdded =  btnElements[i].classList.toggle("button-dark");
       if(darkModeAdded){
        toggleCheck = true;
        console.log(toggleCheck);
        //return toggleCheck;
        //checkDarkActive();
       }
       else{
        toggleCheck = false;
        console.log(toggleCheck);
        //return toggleCheck;
        //checkDarkActive();
       }
    }
    darkModeCommonElements();
    //checkDarkActive();


    // let { body, footer, mainNav} = getCommonDocElements();
    // for (i = 0; i < btnElements.length; i++) {
    //     btnElements[i].classList.toggle("button-dark");
    //     //toggleCheck = true;
    // }
    // if(toggleCheck === true){
    //     darkMode();

    // } else {

    // }

    // let { toggleHome, body, btnElement, btnElements, footer, mainNav } = getIndexDocElements();
    // if (btnElement) {
        // if (!toggleHome.classList.contains("active")) {
        //     // body.classList.toggle("body-dark");
        //     // footer.classList.toggle("body-dark");
        //     // mainNav.classList.toggle("body-dark");
        //     // changeFootBdy(body, footer);
        //     // changeButtons(btnElements);
        //     // changeMainNav(mainNav);
        // }
        // if (toggleHome.classList.contains("active")) {
            // body.classList.toggle("body-dark");
            // footer.classList.toggle("text-primaryDark");
            //mainNav.classList.toggle("mainNavDark");
            //checkForActiveClass(toggleHome);
            // revertFootBdy(body, footer);
            // revertButtons(btnElements);
            // revertMainNav(mainNav);
        }
    // }
// }

function darkModeCommonElements(){
    let { body, footer} = getCommonDocElements();
    body.classList.toggle("body-dark");
    footer.classList.toggle("text-primaryDark");
}

function darkModeRules() {
    let { darkToggleRules, body, btnElement, footer } = getRulesDocElements();
    //let darkToggleRules = document.getElementById("darkModeBtnRules");

    if (btnElement) {
        if (!darkToggleRules.classList.contains("active")) {
            console.log("class active");
            darkToggleRules.classList.remove("active");
            changeFootBdy(body, footer);
            changeMainNav(mainNav);
        } else {
            console.log("No Class is active");
            revertFootBdy(body, footer);
            revertMainNav(mainNav);
            darkToggleRules.classList.add("active");
        }
    }
}

function getCommonDocElements(){
    let toggleHome = document.getElementById("darkModeBtn");
    let body = document.querySelector("body");
    let btnElement = document.querySelector(".btn");
    let footer = document.querySelector("#footer");
    let mainNav = document.querySelectorAll(".mainNav");
    return { toggleHome, body, btnElement,footer, mainNav };
}


function getIndexDocElements() {
    // let toggleHome = document.getElementById("darkModeBtn");
    // let body = document.querySelector("body");
    // let btnElement = document.querySelector(".btn");
    let btnElements = document.querySelectorAll(".btn-primary");
    // let footer = document.querySelector("#footer");
    // let mainNav = document.querySelectorAll(".mainNav");

    // return { toggleHome, body, btnElement, btnElements, footer, mainNav };
    return {btnElements};

}
// function getRulesDocElements() {
//     let darkToggleRules = document.getElementById("darkModeBtnRules");
//     let body = document.querySelector("body");
//     let btnElement = document.querySelector(".btn");
//     let footer = document.querySelector("#footer");
//     let mainNav = document.querySelectorAll(".mainNav");
//     return { darkToggleRules, body, btnElement, footer, mainNav };
// }

// function changeFootBdy(body, footer) {
//     // body.classList.toggle("body-dark");
//     // body.classList.remove("body-dark");
//     footer.classList.remove("text-primaryDark");
//     footer.classList.add("text-primary");
// }
// function revertFootBdy(body, footer) {
//     body.classList.add("body-dark");
//     footer.classList.add("text-primaryDark");
//     footer.classList.remove("text-primary");
// }
// function changeButtons(btnElements) {
//     for (i = 0; i < btnElements.length; i++) {
//         btnElements[i].classList.remove("button-dark");
//     }
// }
// function revertButtons(btnElements) {
//     for (i = 0; i < btnElements.length; i++) {
//         btnElements[i].classList.add("button-dark");
//     }
// }
// function changeMainNav(mainNav) {
//     for (j = 0; j < mainNav.length; j++) {
//         mainNav[j].classList.remove("mainNavDark")
//     }
// }
// function revertMainNav(mainNav) {
//     for (j = 0; j < mainNav.length; j++) {
//         mainNav[j].classList.add("mainNavDark");
//     }
// }
