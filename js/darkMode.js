document.addEventListener("DOMContentLoaded", init);


function init() {
    let darkToggle = document.getElementById("darkModeBtn");
    darkToggle.addEventListener("click", darkMode);
}

function darkMode() {
    let toggle = document.getElementById("darkModeBtn");
    let body = document.querySelector("body");
    let btnElement = document.querySelector(".btn");
    let btnElements = document.querySelectorAll(".btn-primary");

    if (btnElement) {
        if(!toggle.classList.contains("active")){
            body.classList.remove("body-dark");
            for(i=0; i < btnElements.length; i++){
            console.log("test");
            btnElements[i].classList.remove("button-dark");
            }
        }
        if (toggle.classList.contains("active")) {
            console.log("clicked the buttin");
            body.classList.add("body-dark");
            for(i=0; i < btnElements.length; i++){
                btnElements[i].classList.add("button-dark");
                }
            // btnElements.classList.add("button-dark");
        }
    }
    else {
        console.log("not correct call for function");
    }

}