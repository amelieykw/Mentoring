import createError from 'http-errors';
import { getPricesFromDB, saveNewPricesToDB } from '../service';

export const pricesGetHandler = async (req, res) => {
  const pricesData = await getPricesFromDB();

  if (!pricesData) throw createError(404, 'get data from db error');

  if (!Array.isArray(pricesData)) throw createError(406, 'prices need to be an array');

  return res.status(200).send(pricesData);
};

export const pricesPostHandler = async (req, res) => {
  const incomingData = req.body;

  if (!Array.isArray(incomingData)) throw createError(406, 'data format need to be an array');

  if (incomingData.length === 0) throw createError(400, 'no new prices are added, because the incoming data is empty');

  const properties = ['timeStamp', 'price'];
  const check = incomingData.every((entry) => properties.every((property) => property in entry && typeof entry[property] === 'number'));
  if (!check) throw createError(400, 'data format is wrong');

  const outgoingData = await saveNewPricesToDB(incomingData);

  if (!outgoingData) throw createError(417, 'save data to db error');

  return res.status(201).send(outgoingData);
};
