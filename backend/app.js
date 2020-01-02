import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import routes from './routes';

export default () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/', routes);
  return app;
};
