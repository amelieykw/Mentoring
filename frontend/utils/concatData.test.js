import concatData from './concatData';

describe('concatData', () => {
  it('concatData return an array that combined 2 orign data and new data', () => {
    const originData = {
      labels: [1],
      datasets: [{ label: 'Data From Fetch', data: [0] }],
    };
    const newData = {
      labels: [1],
      datasets: [{ label: 'Data From Fetch', data: [1, 2, 3] }],
    };
    const newDataset = concatData(originData, newData);

    expect(newDataset).toStrictEqual({
      labels: [1, 1],
      datasets: [{ label: 'Data From Fetch', data: [0, 1, 2, 3] }],
    });
  });

  it('concatData return an array that combined 2 orign data and new data', () => {
    const originData = {
      labels: [],
      datasets: [{ label: 'Data From Fetch', data: [] }],
    };
    const newData = {
      labels: [],
      datasets: [{ label: 'Data From Fetch', data: [1, 2, 3] }],
    };
    const newDataset = concatData(originData, newData);

    expect(newDataset).toStrictEqual({
      labels: [],
      datasets: [{ label: 'Data From Fetch', data: [1, 2, 3] }],
    });
  });
});
