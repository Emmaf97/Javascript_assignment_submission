document.addEventListener("DOMContentLoaded", init);

function init() {
    let form = document.getElementById("contact-form");
    form.addEventListener("submit", submitEvent);
    let nameBox = document.getElementById("fName");
    //NEED TO UPDATE CODE FOR INVALIDFNAME
    //nameBox.addEventListener("focusout", focusOutName);
    nameBox.addEventListener("focusout", invalidFName);
    let lastNameBox = document.getElementById("lName");
    //NEED TO UPDATE CODE FOR INVALIDLNAME
    //lastNameBox.addEventListener("focusout", focusOutName);
    lastNameBox.addEventListener("focusout", invalidLName);
    let emailBox = document.getElementById("clientEmail");
    emailBox.addEventListener("focusout", invalidEmail);
    let telephoneBox = document.getElementById("clientTel");
    telephoneBox.addEventListener("focusout", invalidTel);
}
//if( isEmpty( fnameBox ) ){ errorMsg = createError(); insert(errorMsg);}
//First draft... FROM
// if( isEmpty( fnameBox ) ){
// 	errorMsg = createError();
// 	insert(errorMsg);
// }


//Second draft... TO
// if( isEmpty( fnameBox ) ){
// 	if( notExists(fNameErrorMessage) ){
// 		errorMsg = createError();
// 		insert(errorMsg);
// 	}
// }

function submitEvent(event) {
    event.preventDefault();
    let { nameInput, nameLastInput, emailInput, telephoneInput } = getFormElements();
    let errorMsg = document.getElementById("error");
    if (isEmpty() === true) {
        if (!errorMsg) {
            if (!nameInput.value && !nameLastInput.value && !emailInput.value && !telephoneInput.value) {
                createError(nameInput);
                createError(nameLastInput);
                createError(emailInput);
                createError(telephoneInput);
            }
            else if (!nameInput.value && !nameLastInput.value) {
                createError(nameInput);
                createError(nameLastInput);
            }
            else if (!emailInput.value && !telephoneInput.value) {
                createError(emailInput);
                createError(telephoneInput);
            }
            else if (!nameInput.value) {
                createError(nameInput);
            }
            else if (!nameLastInput.value) {
                createError(nameLastInput);
            }
            else if (!emailInput.value) {
                createError(emailInput);
            }
            else if (!telephoneInput.value) {
                createError(telephoneInput);
            }
        }
    } else if (isEmpty() === false) {
        if (nameInput.value && nameLastInput.value && emailInput.value && telephoneInput.value) {
            removeError(errorMsg);
            removeError(errorMsg);
            removeError(errorMsg);
            removeError(errorMsg);
            removeError(errorMsg);
        }
        else if (nameInput.value && nameLastInput.value) {
            removeError(errorMsg);
            removeError(errorMsg);
        }
        else if (emailInput.value && telephoneInput.value) {
            removeError(errorMsg);
            removeError(errorMsg);
        }
        else if (nameInput.value) {
            removeError(errorMsg);
        }
        else if (nameLastInput.value) {
            removeError(errorMsg);
        }
        else if (emailInput.value) {
            removeError(errorMsg);
        }
        else if (telephoneInput.value) {
            removeError(errorMsg);
        }
        // removeError(nameInput, nameLastInput, emailInput, telephoneInput);
    }
}

function isEmpty() {
    let { nameInput, nameLastInput, emailInput, telephoneInput } = getFormElements();
    if (nameInput.value && nameLastInput.value && emailInput.value && telephoneInput.value) {
        console.log("value detected for all inputs");
        return false;
    } else if (nameInput.value && nameLastInput.value) {
        console.log("value detected for first and last name");
        return false;
    } else if (emailInput.value && telephoneInput.value) {
        console.log("value detected for email and mobile");
        return false;
    }
    else if (!nameInput.value && !nameLastInput.value && !emailInput.value && !telephoneInput.value) {
        console.log(" no value detected for all inputs");
        return true;
    } else if (!nameInput.value && !nameLastInput.value) {
        console.log("no value detected for first and last name");
        return true;
    } else if (!emailInput.value && !telephoneInput.value) {
        console.log("no value detected for email and mobile");
        return true;
    }
    // else if(nameInput.value || nameLastInput.value || emailInput.value || telephoneInput.value){
    //     console.log("value detected");
    //     return false;
    // }
}
function createError(nameInput, nameLastInput, emailInput, telephoneInput) {
    // let{nameInput, nameLastInput, emailInput, telephoneInput} = getFormElements();
    let errorMsg = document.createElement("p");
    errorMsg.innerText = "This Field is Required";
    errorMsg.classList.add("invalid-Form-Input");
    errorMsg.id = "error";
    if (nameInput) {
        nameInput.parentNode.insertBefore(errorMsg, nameInput.nextElementSibling);
    }
    if (nameLastInput) {
        nameLastInput.parentNode.insertBefore(errorMsg, nameLastInput.nextElementSibling);
    }
    if (emailInput) {
        emailInput.parentNode.insertBefore(errorMsg, emailInput.nextElementSibling);
    }
    if (telephoneInput) {
        telephoneInput.parentNode.insertBefore(errorMsg, telephoneInput.nextElementSibling);
    }
    // nameLastInput.parentNode.insertBefore(errorMsg, nameLastInput.nextElementSibling);
    // emailInput.parentNode.insertBefore(errorMsg, emailInput.nextElementSibling);
    // telephoneInput.parentNode.insertBefore(errorMsg, telephoneInput.nextElementSibling);
}
function removeError(errorMsg) {
    //let errorMsg = document.getElementById("p");
    errorMsg.remove();
}
function getFormElements() {
    let nameInput = document.getElementById("fName");
    let nameLastInput = document.getElementById("lName");
    let emailInput = document.getElementById("clientEmail");
    let telephoneInput = document.getElementById("clientTel");

    return { nameInput, nameLastInput, emailInput, telephoneInput };
}
// function submitEvent(event) {
//     event.preventDefault();
//     let nameInput = document.getElementById("fName");
//     let nameLastInput = document.getElementById("lName");
//     let emailInput = document.getElementById("clientEmail");
//     let telephoneInput = document.getElementById("clientTel");
//     if (!nameInput.value) {
//         let errorMsg = document.createElement("p");
//         errorMsg.innerText = "This Field is Required";
//         errorMsg.classList.add("invalid-Form-Input");
//         nameInput.parentNode.insertBefore(errorMsg, nameInput.nextElementSibling);
//     } if (!nameLastInput.value) {
//         let errorMsg = document.createElement("p");
//         errorMsg.innerText = "This Field is Required";
//         errorMsg.classList.add("invalid-Form-Input");
//         nameLastInput.parentNode.insertBefore(errorMsg, nameLastInput.nextElementSibling);
//     } if (!emailInput.value) {
//         let errorMsg = document.createElement("p");
//         errorMsg.innerText = "This Field is Required";
//         errorMsg.classList.add("invalid-Form-Input");
//         emailInput.parentNode.insertBefore(errorMsg, emailInput.nextElementSibling);
//     } if (!telephoneInput.value) {
//         let errorMsg = document.createElement("p");
//         errorMsg.innerText = "This Field is Required";
//         errorMsg.classList.add("invalid-Form-Input");
//         telephoneInput.parentNode.insertBefore(errorMsg, telephoneInput.nextElementSibling);
//     }
// }

// function focusOutName(e) {
//     // let emailInput = document.getElementById("clientEmail");
//     if (e.target.nextElementSibling) {
//         e.target.nextElementSibling.remove()
//     }
//     //  else if(emailInput.nextElementSibling){
//     //     emailInput.nextElementSibling.remove();
//     // }
// }

function invalidFName() {
    let nameInput = document.getElementById("fName");
    let errorMsg = nameInput.nextElementSibling;
    if (/\d/.test(nameInput.value)) {
        if (!errorMsg) {
            errorMsg = document.createElement("p");
            errorMsg.classList.add("invalid-Form-Input");
            nameInput.parentNode.insertBefore(errorMsg, nameInput.nextElementSibling);
        }
        errorMsg.innerText = "This field does not accept numeric values";
    } else {
        if (errorMsg) {
            console.log("Error Message already created");
            nameInput.nextElementSibling.remove();
        }
    }
}
function invalidLName() {
    let nameLastInput = document.getElementById("lName");
    let errorMsg = nameLastInput.nextElementSibling;
    if (/\d/.test(nameLastInput.value)) {
        if (!errorMsg) {
            errorMsg = document.createElement("p");
            errorMsg.classList.add("invalid-Form-Input");
            nameLastInput.parentNode.insertBefore(errorMsg, nameLastInput.nextElementSibling);
        }
        errorMsg.innerText = "This field does not accept numeric values";
    } else {
        if (errorMsg) {
            console.log("Error Message already created");
            nameLastInput.nextElementSibling.remove();
        }
    }
}
function invalidEmail() {
    let emailInput = document.getElementById("clientEmail");
    let errorMsg = emailInput.nextElementSibling;
    if (!emailInput.value.includes("@")) {
        if (!errorMsg) {
            errorMsg = document.createElement("p");
            errorMsg.classList.add("invalid-Form-Input");
            emailInput.parentNode.insertBefore(errorMsg, emailInput.nextElementSibling);
        }
        errorMsg.innerText = "This field requires an @ email address format";
    } else if (!emailInput.value.includes("@gmail.com")) {
        if (!errorMsg) {
            errorMsg = document.createElement("p");
            errorMsg.classList.add("invalid-Form-Input");
            emailInput.parentNode.insertBefore(errorMsg, emailInput.nextElementSibling);
        }
        errorMsg.innerText = "This field requires a gmail address format";
    }
    else {
        if (errorMsg) {
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
    } else if (telephoneInput.value.length < 10) {
        if (!errorMsg) {
            errorMsg = document.createElement("p");
            // errorMsg.innerText = "This field requires numeric input";
            errorMsg.classList.add("invalid-Form-Input");
            telephoneInput.parentNode.insertBefore(errorMsg, telephoneInput.nextElementSibling);
        }
        errorMsg.innerText = "Mobile number cannot be less than 10";
    } else {
        if (errorMsg) {
            telephoneInput.nextElementSibling.remove();
        }
    }
}
//let submit = document.querySelector(`input[value = "submit"]`);

