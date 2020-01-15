import dataConvert from './dataConvert';

describe('dataConvert', () => {
  it('dataConvert return data with chart format', () => {
    const dataConverted = dataConvert([
      {
        timeStamp: 1,
        price: 100,
      },
    ]);
    expect(dataConverted).toStrictEqual({
      labels: [new Date(1).toLocaleTimeString()],
      datasets: [{ label: 'Data From Fetch', data: [100] }],
    });
  });
});
