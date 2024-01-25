function getCurrencySymbol(){
let optionValues = document.querySelectorAll("#priceConverter option");
optionValues.forEach( option => console.log(option.value));
//check which one was selected
convertCurrency(parameter);

}

function convertCurrency(symbol){
    if(symbol === " "){
        console.log("Not Quite right");
    }
    if(symbol === "euros"){
        //calculate the conversion rate for this currency then store it as a value;
        //this value is then passed into the updateCurrency();

    } else if(symbol === "pounds"){

    }
    else if(symbol === "lira"){

    }
    else if(symbol === "yen"){

    }
}

function updateCurrency(){
    //add a h2 element that removes the previous h2 content with the new price and symbol .
}