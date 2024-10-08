import Vector2 from "./Vector2";

class Body {
  renderingContext: CanvasRenderingContext2D;

  position: Vector2;
  velocity: Vector2;
  acceleration: Vector2;
  impulse: Vector2;
  mass: number;
  momentum: Vector2;
  static: boolean;

  constructor(renderingContext: CanvasRenderingContext2D) {
    this.renderingContext = renderingContext;

    this.position = new Vector2();
    this.velocity = new Vector2();
    this.acceleration = new Vector2();
    this.impulse = new Vector2();
    this.mass = 0;
    this.momentum = new Vector2();
    this.static = false;
  }

  update(deltatime: number) {
    if(!this.static) {
      this.acceleration = this.acceleration.add(this.impulse);
      
      this.velocity = this.velocity.add(this.acceleration.multiply(deltatime));
      this.position = this.position.add(this.velocity.multiply(deltatime));
      
      this.acceleration = this.acceleration.subtract(this.impulse);
      this.impulse = new Vector2();
      
      this.momentum = this.velocity.multiply(this.mass);
    }
  }

  render() {
    this.renderingContext.beginPath();
    this.renderingContext.fillStyle = 'darkolivegreen'
    this.renderingContext.arc(this.position.x, this.position.y, this.mass, 0, 2 * Math.PI);
    this.renderingContext.fill();
  }
}

export default Body;