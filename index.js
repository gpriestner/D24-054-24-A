console.log("working . . .");

const canvas = document.querySelector("canvas");
const view = canvas.getContext("2d");

onResize();
addEventListener("resize", onResize);

function onResize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  view.fillStyle = "white";
  view.strokeStyle = "white";
}

class Ball {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.dx = Math.random() * 6 - 3;
    this.dy = Math.random() * 6 - 3;
  }
  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.y >= canvas.height || this.y <= 0) this.dy = -this.dy;
    if (this.x >= canvas.width || this.x <= 0) this.dx = -this.dx;
  }
  draw() {
    this.update();
    view.fillRect(this.x, this.y, 10, 10);
  }
}

const balls = [];
for (let i = 0; i < 100; ++i) balls.push(new Ball());

function animate() {
  view.clearRect(0, 0, canvas.width, canvas.height);
  for (const b of balls) b.draw();
  requestAnimationFrame(animate);
}

animate();
