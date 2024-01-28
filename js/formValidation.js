document.addEventListener("DOMContentLoaded", init);

function init(){
    let form = document.getElementById("contact-form");
    form.addEventListener("submit", submitEvent);
}

function submitEvent(event){
    event.preventDefault();
    let nameInput = document.getElementById("fName");
    let nameLastInput = document.getElementById("lName");
    let emailInput = document.getElementById("clientEmail");
    let telephoneInput = document.getElementById("clientTel");
    if(!nameInput.value){
        let errorMsg = document.createElement("p");
        errorMsg.innerText = "This Field is Required";
        errorMsg.classList.add("invalid-Form-Input");
        nameInput.parentNode.insertBefore(errorMsg, nameInput.nextSibling);
    } if(!nameLastInput.value){
        let errorMsg = document.createElement("p");
        errorMsg.innerText = "This Field is Required";
        errorMsg.classList.add("invalid-Form-Input");
        nameLastInput.parentNode.insertBefore(errorMsg, nameLastInput.nextSibling);
    }if(!emailInput.value) {
        let errorMsg = document.createElement("p");
        errorMsg.innerText = "This Field is Required";
        errorMsg.classList.add("invalid-Form-Input");
        emailInput.parentNode.insertBefore(errorMsg, emailInput.nextSibling);
    }if(!telephoneInput.value){
        let errorMsg = document.createElement("p");
        errorMsg.innerText = "This Field is Required";
        errorMsg.classList.add("invalid-Form-Input");
        telephoneInput.parentNode.insertBefore(errorMsg, telephoneInput.nextSibling);
    }
}
    //let submit = document.querySelector(`input[value = "submit"]`);

