import dataConvert from './dataConvert';
import { DEFAULT_DATA } from '../config';

describe('dataConvert', () => {
  it('dataConvert return data with chart format', () => {
    const rawData = [
      {
        timeStamp: 1,
        price: 100,
      },
    ];
    const dataConverted = dataConvert(DEFAULT_DATA, rawData, 'Data From Fetch');

    expect(dataConverted).toStrictEqual({
      labels: [new Date(1).toLocaleTimeString()],
      datasets: [{ label: 'Data From Fetch', data: [100] }],
    });
  });
});
