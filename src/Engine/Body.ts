import Vector2 from "./Vector2";

class Body {
  renderingContext: CanvasRenderingContext2D;

  position: Vector2;
  velocity: Vector2;
  acceleration: Vector2;
  impulse: Vector2;

  constructor(renderingContext: CanvasRenderingContext2D) {
    this.renderingContext = renderingContext;

    this.position = new Vector2(this.renderingContext.canvas.width / 2, this.renderingContext.canvas.height / 2);
    this.velocity = new Vector2();
    this.acceleration = new Vector2();
    this.impulse = new Vector2();
  }

  update(deltatime: number) {
    this.acceleration = this.acceleration.add(this.impulse);

    this.velocity = this.velocity.add(this.acceleration.multiply(deltatime));
    this.position = this.position.add(this.velocity.multiply(deltatime));

    this.acceleration = this.acceleration.subtract(this.impulse);
    this.impulse = new Vector2();
  }

  render() {
    this.renderingContext.beginPath();
    this.renderingContext.fillStyle = 'darkolivegreen'
    this.renderingContext.arc(this.position.x, this.position.y, 50, 0, 2 * Math.PI);
    this.renderingContext.fill();
  }
}

export default Body;