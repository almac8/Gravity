class Engine {
  renderingContext: CanvasRenderingContext2D;

  constructor(renderingContext: CanvasRenderingContext2D) {
    this.renderingContext = renderingContext;
  }

  start() {
    console.log('Starting Engine');

    this.renderingContext.beginPath();
    this.renderingContext.fillStyle = 'darkolivegreen'
    this.renderingContext.arc(this.renderingContext.canvas.width / 2, this.renderingContext.canvas.height / 2, 50, 0, 2 * Math.PI);
    this.renderingContext.fill();
  }
}

export default Engine;