import socketClient from './socketClient';
import dataProcesser from './dataProcesser';
import { DEFAULT_DATA, URL } from '../config';
import fetchWithHeaders from '../utils/fetchWithHeaders';

let chartData;
let ws;

function recivedMessageFromSocket(newData) {
  chartData = dataProcesser(newData, chartData, DEFAULT_DATA);
  if (chartData) postMessage(chartData);
}

console.log('worker on connection');

onmessage = ({ data }) => {
  switch (data) {
    case 'start':
      fetchWithHeaders(URL.PRICES)
        .then((result) => {
          recivedMessageFromSocket(result);
        });
      ws = socketClient((newData) => recivedMessageFromSocket(newData));
      break;
    case 'close':
      if (ws) {
        ws.close();
        ws = null;
      }
      break;
    default:
      break;
  }
};
