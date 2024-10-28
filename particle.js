
class Particle {
    constructor(s, v, radius, lifeSpan) {
      this._s = s.copy();                 // Posición
      this._v = v.copy();                 // Velocidad
      this._radius = radius;              // Radio
      this._lifeSpan = lifeSpan;          // Duración total
      this._timeToLive = lifeSpan;        // Tiempo restante de vida
  
      this._tex = loadImage("humo.png");  // Carga la imagen de textura
    }
  
    // Verifica si la partícula está "muerta"
    isDead() {
      return this._timeToLive <= 0;
    }
  
    // Actualiza la posición y reduce el tiempo de vida
    update() {
      this._s.add(p5.Vector.mult(this._v, _timeStep));
      this._timeToLive -= 2;
    }
  
    // Muestra la partícula en pantalla
    display() {
      noStroke();
      let imagen = this._tex;
  
      // Mapea la opacidad en función del tiempo de vida
      let value = map(this._timeToLive, 0, this._lifeSpan, 0, 255);
      fill(0, value);
      
      // Ajusta el modo de imagen y aplica el tinte
      imageMode(CENTER);
      tint(255, value); // Aplica opacidad a la imagen
      image(imagen, this._s.x, this._s.y, this._radius * 2, this._radius * 2); // Dibuja la imagen escalada
    }
  }
  
