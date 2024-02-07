document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.querySelector(".canvas");
    const section = document.querySelector("#header");
    const ctx = canvas.getContext("2d");
    canvas.width = section.clientWidth;
    canvas.height = section.clientHeight;

    const text = "D&DFN";
    // const textX = canvas.width / 2 - 100;
    // const textY = canvas.height / 2 +20;

class Particle{
    constructor(){

    }
    draw(){

    }

    update(){

    }
}

class Effect{
    constructor(context,clientWidth,clientHeight){
        this.context = context;
        this.clientWidth = clientWidth;
        this.clientHeight = clientHeight;
        this.textX = this.clientWidth / 2;
        this.textY = this.clientHeight / 2;
        this.fontSize = 100;
        this.particles = [];
        this.gap = 3;
        this.mouse = {
            radius: 20000,
            x: 0,
            y: 0
        }
        document.addEventListener("mousemove", (e) =>{
            this.mouse.x = e.x;
            this.mouse.y = e.y;
            //console.log(this.mouse.x, this.mouse.y);
        });
    }
    displayText(text){
        this.context.fillStyle = "red";
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.context.font = this.fontSize + "px Oswald"
        this.context.fillText(text,this.textX,this.textY);
        this.converToParticles();
    }
    converToParticles(){
        this.particles = [];
        const pixels = this.context.getImageData(0,0,this.clientWidth,this.clientHeight).data;
        for(let y=0; y < this.clientHeight; y+=this.gap){
            for(let x=0; x < this.clientWidth; x+=this.gap){
                const index = (y * this.clientWidth + x) * 4;
                const alpha =pixels[index + 3];
                if(alpha > 0){
                    const red = pixels[index];
                    const green = pixels[index + 1];
                    const blue = pixels[index + 2];
                    const color = 'rgb(' + red + ',' + green + ',' + blue  + '}';
                    //console.log(color);
                }
            }
        }
        //console.log(pixels);
    }
    render(){

    }
}

const effect = new Effect(ctx,canvas.width,canvas.height);
//console.log(effect);
effect.displayText(text);
function animate(){

}
});

//version 1
// function init() {
//     const canvas = document.querySelector(".canvas");
//     const window = document.querySelector("#header");
//     const ctx = canvas.getContext("2d");
//     canvas.width = window.clientWidth;
//     canvas.height = window.clientHeight;

//     const text = "D&DFN";
//     const textX = canvas.width / 2 - 100;
//     const textY = canvas.height / 2 +20;
//     console.log(ctx);
//     ctx.fillStyle = 'white';
//     ctx.strokeStyle = "red";
//     ctx.font = "80px Oswald"
//     ctx.fillText(text, textX, textY);
//     // ctx.strokeStyle(text, textX, textY);
// }
