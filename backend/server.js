import appFactory from './app';

const app = appFactory();

const PORT = Number(process.env.PORT || 3000);

app.listen(PORT);
