document.addEventListener("DOMContentLoaded", initRules)


function initRules() {
    let darkToggleRules = document.getElementById("darkModeBtnRules");
    darkToggleRules.addEventListener("click", darkModeRules);
}

function darkModeRules() {
    let { darkToggleRules, body, footer, mainNav } = getRulesDocElements();
    //let darkToggleRules = document.getElementById("darkModeBtnRules");

    if (btnElement) {
        if (!darkToggleRules.classList.contains("active")) {
            console.log("No class active");
            changeFootBdy(body, footer);
            changeMainNav(mainNav);
        }
        if (darkToggleRules.classList.contains("active")) {
            console.log("class is active");
            revertFootBdy(body, footer);
            revertMainNav(mainNav);
        }
    }
}

function getRulesDocElements() {
    let darkToggleRules = document.getElementById("darkModeBtnRules");
    let body = document.querySelector("body");
    let footer = document.querySelector("#footer");
    let mainNav = document.querySelectorAll(".mainNav");
    return { darkToggleRules, body, footer, mainNav };
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