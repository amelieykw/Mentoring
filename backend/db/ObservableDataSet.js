import utils from './utils';

const { copyObject } = utils;

class ObservableDataSet {
  constructor() {
    this._observers = [];
    this._dataObjects = [];
  }

  add(data) {
    this._dataObjects.push(...data);
    this._update(data);
    return copyObject(this._dataObjects);
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

export default ObservableDataSet;
