import Scene from "./Scene";

class Engine {
  renderingContext: CanvasRenderingContext2D;
  previousTime: number;
  scene: Scene;

  constructor(renderingContext: CanvasRenderingContext2D) {
    this.renderingContext = renderingContext;
    this.previousTime = 0;
    this.scene = new Scene(this.renderingContext);
  }

  start() {
    this.previousTime = Date.now();
    requestAnimationFrame(() => this.gameloop());
  }

  gameloop() {
    const currentTime = Date.now();
    const deltatime = currentTime - this.previousTime;
    this.previousTime = currentTime;

    this.update(deltatime);
    this.render();

    requestAnimationFrame(() => this.gameloop());
  }

  update(deltatime: number) {
    this.scene.update(deltatime);
  }

  render() {
    this.scene.render();
  }
}

export default Engine;