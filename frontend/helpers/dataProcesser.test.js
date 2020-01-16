import dataProcesser from './dataProcesser';
import dataConvert from '../utils/dataConvert';
import concatData from '../utils/concatData';

import { DEFAULT_DATA } from '../config';

jest.mock('../utils/dataConvert');
jest.mock('../utils/concatData');

describe('testing dataProcesser', () => {
  it('testing dataProcesser without old data', () => {
    dataConvert.mockImplementation(() => [1, 2, 3, 4]);
    concatData.mockImplementation(() => {});

    const result = dataProcesser(null, null, DEFAULT_DATA);

    expect(result).toStrictEqual([1, 2, 3, 4]);
    expect(dataConvert).toHaveBeenCalledWith(DEFAULT_DATA, [], 'no data');
    expect(concatData).not.toHaveBeenCalled();
  });

  it('testing dataProcesser with old data', () => {
    const oldData = [1, 2, 3, 4];

    dataConvert.mockImplementation(() => [1, 2, 3, 4]);
    concatData.mockImplementation(() => [1, 2, 3]);

    const result = dataProcesser(null, oldData, DEFAULT_DATA);

    expect(dataConvert).toHaveBeenCalledWith(DEFAULT_DATA, [], 'no data');
    expect(concatData).toHaveBeenCalledWith([1, 2, 3, 4], [1, 2, 3, 4]);
    expect(result).toStrictEqual([1, 2, 3]);
  });
});
