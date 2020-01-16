import express from 'express';
import { pricesGetHandler, pricesPostHandler } from './pricesHandler';
import { addObserver } from '../service';

export const registerWss = (wss) => {
  const wssObj = {
    update: (data) => {
      wss.clients.forEach((client) => {
        client.send(JSON.stringify(data));
      });
    },
  };
  addObserver(wssObj);

  return wssObj;
};


export default (wss) => {
  const pricesRouter = express.Router();

  registerWss(wss);
  pricesRouter.get('/', pricesGetHandler);
  pricesRouter.post('/', pricesPostHandler);
  pricesRouter.ws('/', () => { });

  return pricesRouter;
};
