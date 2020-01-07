import pricesRouter from './prices';

export default (app) => {
  app.use('/prices', pricesRouter);
};
