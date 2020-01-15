import express from 'express';
import { pricesGetHandler, pricesPostHandler } from './pricesHandler';
import { addObserver } from '../service';

export default (wss) => {
  const pricesRouter = express.Router();

  const wssObj = {
    wss,
    update(data) {
      this.wss.clients.forEach((client) => {
        client.send(JSON.stringify(data));
      });
    },
  };

  addObserver(wssObj);

  pricesRouter.get('/', pricesGetHandler);
  pricesRouter.post('/', pricesPostHandler);
  pricesRouter.ws('/', () => { });

  return pricesRouter;
};
