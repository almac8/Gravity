import GravityGroup from "./GravityGroup";

class Scene {
  renderingContext: CanvasRenderingContext2D;

  gravityGroup: GravityGroup;

  constructor(renderingContext: CanvasRenderingContext2D) {
    this.renderingContext = renderingContext;

    this.gravityGroup = new GravityGroup(this.renderingContext);
  }

  update(deltatime: number) {
    this.gravityGroup.update(deltatime);
  }

  render() {
    this.gravityGroup.render();
  }
}

export default Scene;