import http from 'http';
import appFactory from './app';

const app = appFactory();

const PORT = Number(process.env.PORT || 3000);

const httpServer = http.createServer(app);
httpServer.listen(PORT);
