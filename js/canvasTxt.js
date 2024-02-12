
//document.addEventListener("DOMContentLoaded",loadCanvas );
window.addEventListener("DOMContentLoaded",function (){
    const canvas = document.querySelector(".canvas");
    const section = document.querySelector("#header");
    const ctx = canvas.getContext("2d");
    canvas.width = section.clientWidth;
    canvas.height = section.clientHeight;

    const text = "D&DFN";

    class Particle {
        constructor(effect, x, y, color) {
            this.effect = effect;
            this.x = Math.random() * this.effect.clientWidth;
            this.y = 0;
            this.color = color;
            this.originX = x;
            this.originY = y;
            this.size = this.effect.gap;
            this.dx = 0;
            this.dy = 0;
            this.vx = 0;
            this.dy = 0;
            this.force = 0;
            this.angle = 0;
            this.distance = 0;
            this.friction = Math.random() * 0.2 + 0.15;
            this.ease = Math.random() * 0.1 + 0.005;
        }
        draw() {
            this.effect.context.fillStyle = this.color;
            this.effect.context.fillRect(this.x, this.y, this.size, this.size);
        }

        update() {
            this.dx = this.effect.mouse.x - this.x;
            this.dy = this.effect.mouse.y - this.y;
            this.distance = this.dx * this.dx + this.dy * this.dy;
            this.force = -this.effect.mouse.radius / this.distance;
            if(this.distance < this.effect.mouse.radius){
                this.angle = Math.atan2(this.dy, this.dx);
                this.vx += this.force * Math.cos(this.angle);
                this.vy += this.force * Math.sin(this.angle);
            }
            this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
            this.y += (this.originY - this.y) * this.ease;
        }
    }

    class Effect {
        constructor(context, clientWidth, clientHeight) {
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
            document.addEventListener("mousemove", (e) => {
                this.mouse.x = e.x;
                this.mouse.y = e.y;
            });
        }
        displayText(text) {
            if(localStorage.getItem("dark-mode") === "true"){
                this.context.fillStyle = "orangered";
            } else{
                this.context.fillStyle = "#0d6efd";
            }
            this.context.textAlign = "center";
            this.context.textBaseline = "middle";
            this.context.font = this.fontSize + "px Oswald"
            this.context.fillText(text, this.textX, this.textY);
            this.converToParticles();
        }
        converToParticles() {
            this.particles = [];
            const pixels = this.context.getImageData(0, 0, this.clientWidth, this.clientHeight).data;
            this.context.clearRect(0, 0, this.clientWidth, this.clientHeight);
            for (let y = 0; y < this.clientHeight; y += this.gap) {
                for (let x = 0; x < this.clientWidth; x += this.gap) {
                    const index = (y * this.clientWidth + x) * 4;
                    const alpha = pixels[index + 3];
                    if (alpha > 0) {
                        const red = pixels[index];
                        const green = pixels[index + 1];
                        const blue = pixels[index + 2];
                        const color = 'rgb(' + red + ',' + green + ',' + blue + '}';
                        this.particles.push(new Particle(this, x, y, color));
                        //console.log(color);
                    }
                }
            }
        }
        render() {
            this.particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
        }
        // resize(width,height){
        // canvas.width = width;
        // canvas.height = height;
        // this.textX = this.clientWidth / 2;
        // this.textY = this.clientHeight/ 2;
        // effect.displayText(text);
        //     }
    }

    const effect = new Effect(ctx, canvas.width, canvas.height);
    effect.displayText(text);

    function animate() {
        ctx.clearRect(0, 0, canvas.width,canvas.height);
        effect.render();
        requestAnimationFrame(animate);
    }
    animate();

    // window.addEventListener("resize", function(){
    //     canvas.width = section.clientWidth;
    //     canvas.height = section.clientHeight;
    //     effect.resize(canvas.width,canvas.height);
    // });
});
