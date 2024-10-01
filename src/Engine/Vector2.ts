class Vector2 {
  x: number;
  y: number;

  constructor(x?: number, y?: number) {
    this.x = x ?? 0;
    this.y = y ?? 0;
  }

  add(v2: Vector2) {
    return new Vector2(
      this.x + v2.x,
      this.y + v2.y
    );
  }

  subtract(v2: Vector2) {
    return new Vector2(
      this.x - v2.x,
      this.y - v2.y
    );
  }

  multiply(magnitude: number) {
    return new Vector2(
      this.x * magnitude,
      this.y * magnitude
    );
  }

  divide(magnitude: number) {
    return new Vector2(
      this.x / magnitude,
      this.y / magnitude
    );
  }

  distance(v2: Vector2) {
    const difference = this.subtract(v2);

    if(difference.x < 0) difference.x *= -1;
    if(difference.y < 0) difference.y *= -1;

    return difference.x + difference.y;
  }

  normalizedDirection(v2: Vector2) {
    let difference = this.subtract(v2);

    return difference.divide(this.distance(v2));
  }

  negate() {
    return new Vector2(
      -this.x,
      -this.y
    );
  }
}

export default Vector2;