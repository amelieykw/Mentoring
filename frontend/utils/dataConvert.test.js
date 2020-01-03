import dataConvert from './dataConvert';

describe('dataConvert', () => {
  it('dataConvert return data with chart format', () => {
    const dataConverted = dataConvert({
      data: [
        {
          timeStamp: 1,
          price: 100,
        },
      ],
    });
    expect(dataConverted).toStrictEqual({
      labels: [1],
      datasets: [{ label: 'Data From Fetch', data: [100] }],
    });
  });
});
