import ObservableDataSet from './db/ObservableDataSet';

const dbOperations = new ObservableDataSet();

const getPricesFromDB = async () => dbOperations.getAll();

const saveNewPricesToDB = async (newPrices) => dbOperations.add(newPrices);

export default { getPricesFromDB, saveNewPricesToDB };
