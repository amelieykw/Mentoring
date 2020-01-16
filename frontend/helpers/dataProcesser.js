import dataConvert from '../utils/dataConvert';
import concatData from '../utils/concatData';

function dataProcesser(rawData, oldData, defaultData) {
  const newData = dataConvert(
    defaultData,
    rawData || [],
    rawData ? 'fetched data' : 'no data',
  );

  return oldData ? concatData(oldData, newData) : newData;
}
export default dataProcesser;
