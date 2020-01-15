import ObservableDataSet from './ObservableDataSet';

function Singleton() {
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
}

export default Singleton();
