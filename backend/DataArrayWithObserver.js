
function copyObject(object) {
  return JSON.parse(JSON.stringify(object));
}

class DataArrayWithObserver {
  constructor() {
    this._observers = [];
    this._dataObjects = [];
  }

  add(data) {
    this._dataObjects.push(data);
    this._update(data);
    return copyObject(data);
  }

  getAll() {
    return copyObject(this._dataObjects);
  }

  addObserver(listener) {
    this._observers.push(listener);
  }

  _update(data) {
    this._observers.forEach((listener) => { listener.update(data); });
  }
}

export default DataArrayWithObserver;
