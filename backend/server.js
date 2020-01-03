import http from 'http';
import appFactory from './app';

const app = appFactory();

const PORT = 3000;

const httpServer = http.createServer(app);
httpServer.listen(PORT);
