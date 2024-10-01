import Body from "./Body";

class Scene {
  renderingContext: CanvasRenderingContext2D;
  body: Body;

  constructor(renderingContext: CanvasRenderingContext2D) {
    this.renderingContext = renderingContext;
    this.body = new Body(this.renderingContext);
  }

  update(deltatime: number) {
    this.body.update(deltatime);
  }

  render() {
    this.body.render();
  }
}

export default Scene;