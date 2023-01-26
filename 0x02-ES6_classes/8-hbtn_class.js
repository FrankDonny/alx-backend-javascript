export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size(){
    return this._size
  }
  if ( Number(this) ){
    return size();
  } else if (String(this)){
    return this._location;
  }
}
