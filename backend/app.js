import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import errorHandler from 'api-error-handler';
import registeRoutes from './routes';


export default () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(errorHandler());

  registeRoutes(app);

  return app;
};
