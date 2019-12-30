import DataArrayWithObserver from './DataArrayWithObserver';

describe('Test DataArrayWithObserver class', () => {
  const addData = { timeStamp: 1577428735800, price: 400 };
  let dataset;

  beforeEach(() => {
    dataset = new DataArrayWithObserver();
  });

  it('Test add function', () => {
    expect(dataset.add(addData)).toStrictEqual(addData);
  });
  it('Test getAll function', () => {
    dataset.add(addData);
    expect(dataset.getAll()).toStrictEqual([addData]);
  });
  it('Test addObserver function', () => {
    let updatedData;
    dataset.addObserver({ update: (data) => { updatedData = data; } });
    dataset.add(addData);
    expect(updatedData).toEqual(addData);
  });
});