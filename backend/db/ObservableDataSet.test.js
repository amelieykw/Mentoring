import fs from 'fs';
import ObservableDataSet from './ObservableDataSet';

jest.mock('fs');

describe('Test ObservableDataSet class', () => {
  const addData = [{ timeStamp: 1577428735800, price: 400 }];
  let dataset;
  fs.readFileSync.mockReturnValue('[]');

  beforeEach(() => {
    dataset = new ObservableDataSet();
  });

  it('Test add function', () => {
    expect(dataset.add(addData)).toStrictEqual([...addData]);
  });
  it('Test getAll function', () => {
    dataset.add(addData);
    expect(dataset.getAll()).toStrictEqual([...addData]);
  });
  it('Test addObserver function', () => {
    const cb = { update: jest.fn() };
    dataset.addObserver(cb);
    dataset.add(addData);
    expect(cb.update.mock.calls.length).toBe(1);
  });
});
