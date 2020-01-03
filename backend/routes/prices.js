import express from 'express';
import 'express-async-errors';

import prices from '../db';

const pricesRouter = express.Router();

const getPricesFromDB = async () => prices;

pricesRouter.get('/', async (req, res) => {
  let pricesData = null;

  pricesData = await getPricesFromDB();

  if (!pricesData) throw Error('get data from db error');

  if (!Array.isArray(pricesData)) {
    return res.status(400).send({
      error: 'prices need to be an array',
    });
  }

  res.set('count', pricesData.length);

  return res.status(200).send({
    data: pricesData,
  });
});

const saveNewPricesToDB = async (newPrices) => {
  newPrices.forEach((newPrice) => prices.push(newPrice));
  return prices;
};

pricesRouter.post('/', async (req, res) => {
  const incomingData = req.body;

  if (!Array.isArray(incomingData)) {
    return res.status(400).send({
      error: 'data format need to be an array',
    });
  }

  if (incomingData.length === 0) {
    return res.status(400).send({
      error: 'no new prices are added, because the incoming data is empty',
    });
  }

  const properties = ['timeStamp', 'price'];
  const check = incomingData.every((entry) => properties.every((property) => property in entry && typeof entry[property] === 'number'));
  if (!check) {
    return res.status(400).send({
      error: 'data format is wrong',
    });
  }

  const outgoingData = await saveNewPricesToDB(incomingData);

  if (!outgoingData) throw Error('save data to db error');

  return res.status(201).send(outgoingData);
});

pricesRouter.use((err, req, res, next) => {
  res.status(403);
  res.json({ error: err.message });
  next(err);
});

export default pricesRouter;
