import express from 'express';

import pricesRouter from './prices';

const router = express.Router();

router.use('/prices', pricesRouter);

export default (app) => {
  app.use('/', router);
};
