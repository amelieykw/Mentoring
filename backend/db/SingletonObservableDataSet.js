/* eslint-disable import/prefer-default-export */
import ObservableDataSet from './ObservableDataSet';

// eslint-disable-next-line func-names
export const Singleton = (function () {
  let instance;

  function createInstance() {
    const dbOperations = new ObservableDataSet();
    return dbOperations;
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
}());
