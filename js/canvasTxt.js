document.addEventListener("DOMContentLoaded", init);

function init() {
    const canvas = document.querySelector(".canvas");
    const window = document.querySelector("#header");
    const ctx = canvas.getContext("2d");
    canvas.width = window.clientWidth;
    canvas.height = window.clientHeight;

    const text = "D&DFN";
    const textX = canvas.width / 2 - 100;
    const textY = canvas.height / 2 +20;
    console.log(ctx);
    ctx.fillStyle = 'white';
    ctx.strokeStyle = "red";
    ctx.font = "80px Oswald"
    ctx.fillText(text, textX, textY);
    // ctx.strokeStyle(text, textX, textY);
}