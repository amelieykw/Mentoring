import registePricesRouter from './prices';

export default (app) => {
  app.use('/prices', registePricesRouter());
};
