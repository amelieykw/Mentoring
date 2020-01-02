import express from 'express';

import prices from './db';

const router = express.Router();

const getPricesFromDB = async () => prices;

router.get('/prices', async (req, res, next) => {
  let pricesData = null;
  try {
    pricesData = await getPricesFromDB();

    if (!Array.isArray(prices)) {
      return res.status(400).send({
        success: 'false',
        message: 'prices need to be an array',
      });
    }
  } catch (error) {
    next(error);
  }

  res.set('count', prices.length);
  return res.status(200).send({
    success: 'true',
    message: 'prices retrieved successfully',
    data: pricesData,
  });
});

const saveNewPricesToDB = async (newPrices) => prices.concat(newPrices);

router.post('/prices', async (req, res, next) => {
  if (!Array.isArray(req.body)) {
    return res.status(400).send({
      success: 'false',
      message: 'data format need to be an array',
    });
  }

  if (req.body.length === 0) {
    return res.status(201).send({
      success: 'true',
      message: 'no new prices are added, because the incoming data is empty',
    });
  }

  const properties = ['timeStamp', 'price'];
  const check = req.body.every((entry) => properties.every((property) => property in entry && typeof entry[property] === 'number'));
  if (!check) {
    return res.status(400).send({
      success: 'false',
      message: 'data format is wrong',
    });
  }

  try {
    await saveNewPricesToDB(req.body);
  } catch (error) {
    next(error);
  }

  return res.status(201).send({
    success: 'true',
    message: 'new price added successfully',
    newData: req.body,
  });
});

export default router;
