public class Particle
{
   PVector _s;         
   PVector _v;         
   float _radius; 
   color _color;       
   float _lifeSpan;     
   float _timeToLive;   
   PImage _tex;
   
   Particle(PVector s, PVector v, float radius, float lifeSpan)
   {
      _s = s;
      _v = v;

      _radius = radius;
      _lifeSpan = lifeSpan;
      _timeToLive = _lifeSpan;
      
      _tex = loadImage("humo.png"); // humo.png o burbujas.png
   }

   boolean isDead()
   {
      return (_timeToLive <= 0.0);
   }

   void update()
   { 
      _s.add(PVector.mult(_v, _timeStep));
      _timeToLive -= 2;
   }

   void display()
   {
      noStroke();

      PImage imagen = _tex;
      float value = map(_timeToLive, 0, _lifeSpan, 0, 255);
      fill(0,value);
      imageMode(CENTER);
      tint(255, value);
      image(imagen,_s.x, _s.y);
   }
}
