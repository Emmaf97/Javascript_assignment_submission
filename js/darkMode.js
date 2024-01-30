document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("darkModeBtn")) {
        initIndex();
    } else if (document.getElementById("darkModeBtnRules")) {
        initRules();
    }
});


function initIndex() {
    let darkToggleHome = document.getElementById("darkModeBtn");
    darkToggleHome.addEventListener("click", darkMode);
}

function initRules() {
    let darkToggleRules = document.getElementById("darkModeBtnRules");
    darkToggleRules.addEventListener("click", darkModeRules);
}


function darkMode() {
    let { toggleHome, body, btnElement, btnElements, footer, mainNav } = getIndexDocElements();
    if (btnElement) {
        if (!toggleHome.classList.contains("active")) {
            changeFootBdy(body, footer);
            changeButtons(btnElements);
            changeMainNav(mainNav);
        }
        if (toggleHome.classList.contains("active")) {
            //checkForActiveClass(toggleHome);
            revertFootBdy(body, footer);
            revertButtons(btnElements);
            revertMainNav(mainNav);
        }
    }
}
function darkModeRules() {
    let { darkToggleRules, body, btnElement, footer, mainNav } = getRulesDocElements();
    //let darkToggleRules = document.getElementById("darkModeBtnRules");

    if (btnElement && btnElement) {
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


function getIndexDocElements() {
    let toggleHome = document.getElementById("darkModeBtn");
    let body = document.querySelector("body");
    let btnElement = document.querySelector(".btn");
    let btnElements = document.querySelectorAll(".btn-primary");
    let footer = document.querySelector("#footer");
    let mainNav = document.querySelectorAll(".mainNav");

    return { toggleHome, body, btnElement, btnElements, footer, mainNav };

}
function getRulesDocElements() {
    let darkToggleRules = document.getElementById("darkModeBtnRules");
    let body = document.querySelector("body");
    let btnElement = document.querySelector(".btn");
    //let aria = document.querySelector(".btn>aria-pressed")
    let footer = document.querySelector("#footer");
    let mainNav = document.querySelectorAll(".mainNav");
    return { darkToggleRules, body, btnElement, footer, mainNav };
}

function changeFootBdy(body, footer) {
    body.classList.remove("body-dark");
    footer.classList.remove("text-primaryDark");
    footer.classList.add("text-primary");
}
function revertFootBdy(body, footer) {
    body.classList.add("body-dark");
    footer.classList.add("text-primaryDark");
    footer.classList.remove("text-primary");
}
function changeButtons(btnElements) {
    for (i = 0; i < btnElements.length; i++) {
        btnElements[i].classList.remove("button-dark");
    }
}
function revertButtons(btnElements) {
    for (i = 0; i < btnElements.length; i++) {
        btnElements[i].classList.add("button-dark");
    }
}
function changeMainNav(mainNav) {
    for (j = 0; j < mainNav.length; j++) {
        mainNav[j].classList.remove("mainNavDark")
    }
}
function revertMainNav(mainNav) {
    for (j = 0; j < mainNav.length; j++) {
        mainNav[j].classList.add("mainNavDark");
    }
}
