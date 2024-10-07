import Body from "./Body";
import Vector2 from "./Vector2";

class GravityGroup {
  renderingContext: CanvasRenderingContext2D;
  
  bodyCount = 4;
  gravitationalConstant = 0.01;
  
  bodies: Body[];
  gravityPairs: Vector2[];

  constructor(renderingContext: CanvasRenderingContext2D) {
    this.renderingContext = renderingContext;

    this.bodies = [];
    this.gravityPairs = [];

    this.initializeTestBodies();
    //  this.initializeRandomBodies();
    
    this.initializeGravityPairs();
  }

  initializeTestBodies() {
    for(let i = 0; i < this.bodyCount; i++) {
      const body = new Body(this.renderingContext);
      this.bodies.push(body);
    }

    this.bodies[0].position = new Vector2(this.renderingContext.canvas.width / 2, this.renderingContext.canvas.height / 2);
    this.bodies[0].mass = 100;
    this.bodies[0].static = true;

    this.bodies[1].position = new Vector2(this.renderingContext.canvas.width / 2 + 200, this.renderingContext.canvas.height / 2);
    this.bodies[1].mass = 1;
    this.bodies[1].velocity = new Vector2(0, -0.05);

    this.bodies[2].position = new Vector2(this.renderingContext.canvas.width / 2 - 400, this.renderingContext.canvas.height / 2);
    this.bodies[2].mass = 5;
    this.bodies[2].velocity = new Vector2(0, 0.1);

    this.bodies[3].position = new Vector2(this.renderingContext.canvas.width / 2 - 370, this.renderingContext.canvas.height / 2);
    this.bodies[3].mass = 1;
    this.bodies[3].velocity = new Vector2(0, 0.07);
  }

  initializeRandomBodies() {
    for(let i = 0; i < this.bodyCount; i++) {
      const body = new Body(this.renderingContext);

      body.position.x = Math.random() * this.renderingContext.canvas.width;
      body.position.y = Math.random() * this.renderingContext.canvas.height;
      body.mass = Math.random() * 25;

      this.bodies.push(body);
    }
  }

  initializeGravityPairs() {
    this.gravityPairs = [];

    this.bodies.forEach((_, body_1_index) => {
      this.bodies.forEach((_, body_2_index) => {
        if(body_1_index !== body_2_index) {
          let equalExists = false;

          this.gravityPairs.forEach(pair => {
            if(pair.x === body_2_index && pair.y === body_1_index) equalExists = true;
          })

          if(!equalExists) {
            this.gravityPairs.push(new Vector2(body_1_index, body_2_index));
          }
        }
      });
    });
  }

  applyGravitationalImpulses(body_1: Body, body_2: Body) {
    const distance = body_1.position.distance(body_2.position);

    if(distance > body_1.mass + body_2.mass) {
      const masses = body_1.mass * body_2.mass;
      const squaredDistance = distance * distance;
      const gravitationalQwotient = masses / squaredDistance;
      const gravitationalForce = gravitationalQwotient * this.gravitationalConstant;
      const normalizedDirection = body_1.position.normalizedDirection(body_2.position);
      
      const gravitationalImpulse_1 = normalizedDirection.multiply(-gravitationalForce);
      const gravitationalImpulse_2 = normalizedDirection.multiply(gravitationalForce);
      
      body_1.impulse = body_1.impulse.add(gravitationalImpulse_1);
      body_2.impulse = body_2.impulse.add(gravitationalImpulse_2);
    } else {
      const totalMomentum = body_1.momentum.add(body_2.momentum);
      const totalMass = body_1.mass + body_2.mass;
      const finalVelocity = totalMomentum.divide(totalMass);

      body_1.mass = body_1.mass + body_2.mass;
      body_2.mass = 0;

      body_1.impulse = new Vector2();
      body_2.impulse = new Vector2();

      body_1.acceleration = new Vector2();
      body_2.acceleration = new Vector2();

      body_1.velocity = finalVelocity;
      body_2.velocity = finalVelocity;
    }
  }

  update(deltatime: number) {
    this.gravityPairs.forEach(gravityPair => {
      this.applyGravitationalImpulses(this.bodies[gravityPair.x], this.bodies[gravityPair.y]);
    });

    this.bodies.forEach(body => body.update(deltatime));
  }

  render() {
    this.bodies.forEach(body => body.render());
  }
}

export default GravityGroup;