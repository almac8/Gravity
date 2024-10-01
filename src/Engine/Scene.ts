class Scene {
  renderingContext: CanvasRenderingContext2D;

  constructor(renderingContext: CanvasRenderingContext2D) {
    this.renderingContext = renderingContext;
  }

  update(deltatime: number) {}

  render() {
    this.renderingContext.beginPath();
    this.renderingContext.fillStyle = 'darkolivegreen'
    this.renderingContext.arc(this.renderingContext.canvas.width / 2, this.renderingContext.canvas.height / 2, 50, 0, 2 * Math.PI);
    this.renderingContext.fill();
  }
}

export default Scene;