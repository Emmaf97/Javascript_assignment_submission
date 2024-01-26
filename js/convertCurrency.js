document.addEventListener("DOMContentLoaded", init);

let symbolEuro = "€";
let symbolPounds = "£";
let symbolLira = "₤";
let symbolYen = "¥";

function init(){
    let selectOption = document.getElementById("priceConverter");
    selectOption.addEventListener("change",getCurrencySymbol);
}
function getCurrencySymbol(option){
option = this.value;
convertCurrency(option);
}

function convertCurrency(optionValue){
    let curDollar = 29.99;
    let curEuro = 0.9199
    let curYen = 147.7509;
    let curLira = 30.3049;
    let curPounds = 0.7853;
    let result = 0;
    if(optionValue === "euros"){
        result += Math.round(curDollar * curEuro * 100) / 100;
        updateCurrency(symbolEuro,result);

    } else if(optionValue === "pounds"){
        result += Math.round(curDollar * curPounds * 100) / 100;
        updateCurrency(symbolPounds,result);
    }
    else if(optionValue === "lira"){
        result += Math.round(curDollar * curLira * 100) / 100;
        updateCurrency(symbolLira,result);
    }
    else if(optionValue === "yen"){
        result += Math.round(curDollar * curYen * 100) / 100;
        updateCurrency(symbolYen,result);
    } else if(optionValue === "dollar"){
        result = curDollar;
    }
}

function updateCurrency(symbol,result){
    let h2Price = document.querySelectorAll("h2.price");
    for(i=0; i < h2Price.length; i++){
        h2Price[i].innerHTML = "Price: " + symbol + result;
    }
}