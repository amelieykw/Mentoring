import express from 'express';
import { pricesGetHandler, pricesPostHandler } from './pricesHandler';

export default () => {
  const pricesRouter = express.Router();

  pricesRouter.get('/', pricesGetHandler);
  pricesRouter.post('/', pricesPostHandler);

  return pricesRouter;
};
