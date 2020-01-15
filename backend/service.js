import Singleton from './db/SingletonObservableDataSet';

export const getPricesFromDB = async () => Singleton.getInstance().getAll();

export const saveNewPricesToDB = async (newPrices) => Singleton.getInstance().add(newPrices);

export const addObserver = (observer) => Singleton.getInstance().addObserver(observer);
