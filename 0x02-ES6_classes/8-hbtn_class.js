export default class HolbertonClass {
  constructor(size, location) { // eslint-disable-next-line no-underscore-dangle
    this._size = size;// eslint-disable-next-line no-underscore-dangle
    this._location = location;
    this[Symbol.toPrimitive] = this[Symbol.toPrimitive].bind(this);
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') { // eslint-disable-next-line no-underscore-dangle
      return this._location;
    }
    if (hint === 'number') { // eslint-disable-next-line no-underscore-dangle
      return this._size;
    }
  }
}
