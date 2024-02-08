document.addEventListener("DOMContentLoaded", init);

function init() {
    let form = document.getElementById("contact-form");
    form.addEventListener("submit", submitEvent);
    let nameBox = document.getElementById("fName");
    nameBox.addEventListener("focusout", focusOutName);
    nameBox.addEventListener("focusout", invalidFName);
    let lastNameBox = document.getElementById("lName");
    lastNameBox.addEventListener("focusout", focusOutName);
    lastNameBox.addEventListener("focusout", invalidLName);
    let emailBox = document.getElementById("clientEmail");
    emailBox.addEventListener("focusout", invalidEmail);
    let telephoneBox = document.getElementById("clientTel");
    telephoneBox.addEventListener("focusout", invalidTel);
}

function submitEvent(event) {
    event.preventDefault();
    let nameInput = document.getElementById("fName");
    let nameLastInput = document.getElementById("lName");
    let emailInput = document.getElementById("clientEmail");
    let telephoneInput = document.getElementById("clientTel");
    if (!nameInput.value) {
        let errorMsg = document.createElement("p");
        errorMsg.innerText = "This Field is Required";
        errorMsg.classList.add("invalid-Form-Input");
        nameInput.parentNode.insertBefore(errorMsg, nameInput.nextElementSibling);
    } if (!nameLastInput.value) {
        let errorMsg = document.createElement("p");
        errorMsg.innerText = "This Field is Required";
        errorMsg.classList.add("invalid-Form-Input");
        nameLastInput.parentNode.insertBefore(errorMsg, nameLastInput.nextElementSibling);
    } if (!emailInput.value) {
        let errorMsg = document.createElement("p");
        errorMsg.innerText = "This Field is Required";
        errorMsg.classList.add("invalid-Form-Input");
        emailInput.parentNode.insertBefore(errorMsg, emailInput.nextElementSibling);
    } if (!telephoneInput.value) {
        let errorMsg = document.createElement("p");
        errorMsg.innerText = "This Field is Required";
        errorMsg.classList.add("invalid-Form-Input");
        telephoneInput.parentNode.insertBefore(errorMsg, telephoneInput.nextElementSibling);
    }
}

function focusOutName(e) {
    // let emailInput = document.getElementById("clientEmail");
    if (e.target.nextElementSibling) {
        e.target.nextElementSibling.remove()
    }
    //  else if(emailInput.nextElementSibling){
    //     emailInput.nextElementSibling.remove();
    // }
}

function invalidFName() {
    let nameInput = document.getElementById("fName");

    if (/\d/.test(nameInput.value)) {
        let errorMsg = document.createElement("p");
        errorMsg.innerText = "This field does not accept numeric values";
        errorMsg.classList.add("invalid-Form-Input");
        nameInput.parentNode.insertBefore(errorMsg, nameInput.nextElementSibling);
    }
}
function invalidLName() {
    let nameLastInput = document.getElementById("lName");
    if (/\d/.test(nameLastInput.value)) {
        let errorMsg = document.createElement("p");
        errorMsg.innerText = "This field does not accept numeric values";
        errorMsg.classList.add("invalid-Form-Input");
        nameLastInput.parentNode.insertBefore(errorMsg, nameLastInput.nextElementSibling);
    }
}
function invalidEmail() {
    let emailInput = document.getElementById("clientEmail");
    let errorMsg = emailInput.nextElementSibling;
    if (!emailInput.value.includes("@gmail.com")) {
        if(!errorMsg){
            errorMsg = document.createElement("p");
            errorMsg.classList.add("invalid-Form-Input");
            emailInput.parentNode.insertBefore(errorMsg, emailInput.nextElementSibling);
        }
        errorMsg.innerText = "This field requires an @ email address format";
    } else {
        if(errorMsg){
            emailInput.nextElementSibling.remove();
        }
    }
}
function invalidTel() {
    let telephoneInput = document.getElementById("clientTel");
    let errorMsg = telephoneInput.nextElementSibling;
    if (!/\d/.test(telephoneInput.value)) {
        if (!errorMsg) {
            errorMsg = document.createElement("p");
            // errorMsg.innerText = "This field requires numeric input";
            errorMsg.classList.add("invalid-Form-Input");
            telephoneInput.parentNode.insertBefore(errorMsg, telephoneInput.nextElementSibling);
        }
        errorMsg.innerText = "This field requires numeric input";
    } else {
        if (errorMsg) {
            telephoneInput.nextElementSibling.remove();
        }
    }
}
//let submit = document.querySelector(`input[value = "submit"]`);

