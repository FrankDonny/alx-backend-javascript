export default class Car {
  constructor(brand, motor, color) { // eslint-disable-next-line no-underscore-dangle
    this._brand = brand;// eslint-disable-next-line no-underscore-dangle
    this._motor = motor;// eslint-disable-next-line no-underscore-dangle
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    // eslint-disable-next-line no-underscore-dangle
    return new Species(this._brand, this._motor, this._color);
  }
}
