
// This creates a particle effect on the text when it enters the canvas on page load and also has response to mouse interaction.
// This effect idea was inspired by the video https://www.youtube.com/watch?v=2F2t1RJoGt8
window.addEventListener("DOMContentLoaded",function (){
    const canvas = document.querySelector(".canvas");
    const section = document.querySelector("#header");
    const ctx = canvas.getContext("2d");
    canvas.width = section.clientWidth;
    canvas.height = section.clientHeight;

    const text = "D&DFN";
// Here we make the class particle. this takes an effect, x, y and color.
// It has methods for drawing the particle from the effect effect object using the originX and Y on the canvas.

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
// Update gets the mouse position checks distance of the text against the radius of the mouse. If the distance is less than the mouse radius,
// it then applies the velocity, force and an angle using the pythagoras theorem to the variables x and y.
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

// the effect class takes a context, width and a height(ctx(this uses the 2d library to make the particle effect), width and height)
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
        // displayText displays the text to the canvas and also checks whether darkmode is enabled or not and applies color accordingly.
        // It also sets the fontsize, where the text is centered and envokes the converToParticles function.
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
        // converToParticles() this scans the canvas for text and creates a grid of x and y. The two for loops run through the canvas and check the color
        // values for each pixel. If the alpha is greater than 0 then it will add the pixel to the red, green or blue color array and will
        // then push the the new particle to the with the x and y and color string to the particle array.
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
    }
 // This creates a new Effect object and effect.displayText will pass in the text variable assigned above.
    const effect = new Effect(ctx, canvas.width, canvas.height);
    effect.displayText(text);

    // this function clears the canvas so that the text does not stay on the screen along with all the other iterations of the text.
    function animate() {
        ctx.clearRect(0, 0, canvas.width,canvas.height);
        effect.render();
        requestAnimationFrame(animate);
    }
    animate();

});
