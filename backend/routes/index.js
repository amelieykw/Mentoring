import registePricesRouter from './prices';

export default (app, wss) => {
  app.use('/prices', registePricesRouter(wss));
};
