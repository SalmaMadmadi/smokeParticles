float _timeStep = 1;       //<>//
int DISPLAY_SIZE_X = 800;
int DISPLAY_SIZE_Y = 600;

ArrayList<Particle> particles;

void settings()
{
   size(DISPLAY_SIZE_X, DISPLAY_SIZE_Y);
}

void setup()
{
   background(0);
   particles = new ArrayList<Particle>();
}

void draw()
{
  background(0);
  
  PVector mouse = new PVector(mouseX, mouseY);
  PVector v = new PVector(random(-1, 1), random(-5,-1));
  float r = random(1,20);
  Particle p = new Particle(mouse, v, r, 255);
  particles.add(p);
  
  for(int i = particles.size()-1; i >= 0; i--)
  {
    if(!particles.get(i).isDead())
    {
      particles.get(i).update();
      particles.get(i).display();
    } else {
      particles.remove(particles.get(i));
    }
  }
}
