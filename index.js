// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(diameter) {
    this.radius = diameter/2;
  }

  get circumference() {
    return this.diameter * Math.PI;
  }

  set circumference(c) {
    this.diameter = c/Math.PI
  }

  get area() {
    return this.radius ** 2 * Math.PI;
  }

  set area(area) {
    this.radius = Math.sqrt(area/Math.PI)
  }
}
