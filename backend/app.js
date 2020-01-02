import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import prices from './routes';

export default () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/', prices);
  return app;
};
