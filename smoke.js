let _timeStep = 1;
const DISPLAY_SIZE_X = 800;
const DISPLAY_SIZE_Y = 600;
let particles = [];

function setup() {
  createCanvas(DISPLAY_SIZE_X, DISPLAY_SIZE_Y);
  background(0);
}

function draw() {
  background(0);

  let mouse = createVector(mouseX, mouseY);
  let v = createVector(random(-1, 1), random(-5, -1));
  let r = random(1, 20);
  let p = new Particle(mouse, v, r, 255);
  particles.push(p);

  for (let i = particles.length - 1; i >= 0; i--) {
    if (!particles[i].isDead()) {
      particles[i].update();
      particles[i].display();
    } else {
      particles.splice(i, 1);  // Elimina el elemento en la posición i
    }
  }
}
