import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import errorHandler from 'api-error-handler';
import expressWs from 'express-ws';

import registeRoutes from './routes';

export default () => {
  const app = express();
  const wsInstance = expressWs(app);

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('./dist/frontend'));

  registeRoutes(app, wsInstance.getWss());
  app.use(errorHandler());

  return app;
};
