import ObservableDataSet from './ObservableDataSet';
import FileStore from './FileStore';
import config from './config';

function Singleton() {
  let instance;
  function createInstance() {
    const dbOperations = new ObservableDataSet();
    FileStore(dbOperations)(config.STORE_FILE_PATH);
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
