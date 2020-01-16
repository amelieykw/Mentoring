function dataConvert(defaultData, rawData, label) {
  const convertedData = JSON.parse(defaultData);

  if (rawData && rawData.length) {
    rawData.forEach((data) => {
      convertedData.labels.push(data.timeStamp);
      convertedData.datasets[0].data.push(data.price);
    });
    convertedData.datasets[0].label = label;
  }
  return convertedData;
}
export default dataConvert;
