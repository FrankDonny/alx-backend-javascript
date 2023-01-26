export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
    this[Symbol.toPrimitive] = this[Symbol.toPrimitive].bind(this);
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this._location;
    }
    if (hint === 'number') {
      return this._size;
    }
  }
}
