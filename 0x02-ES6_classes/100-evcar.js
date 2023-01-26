import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super();// eslint-disable-next-line no-underscore-dangle
    this._brand = brand;// eslint-disable-next-line no-underscore-dangle
    this._motor = motor;// eslint-disable-next-line no-underscore-dangle
    this._color = color;// eslint-disable-next-line no-underscore-dangle
    this._range = range;
  }

  cloneCar() {
    const clonedCar = new Car();// eslint-disable-next-line no-underscore-dangle
    clonedCar._brand = this._brand;// eslint-disable-next-line no-underscore-dangle
    clonedCar._motor = this._motor;// eslint-disable-next-line no-underscore-dangle
    clonedCar._color = this._color;
    return clonedCar;
  }
}

export default EVCar;
