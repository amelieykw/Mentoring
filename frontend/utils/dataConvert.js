function temporaryDataConvert(datasToConvert) {
  const convertedData = { labels: [], datasets: [{ label: '', data: [] }] };
  if (datasToConvert && datasToConvert.length) {
    datasToConvert.forEach((data) => {
      convertedData.labels.push(data.timeStamp);
      convertedData.datasets[0].data.push(data.price);
    });
    convertedData.datasets[0].label = 'Data From Fetch';
  }
  return convertedData;
}
export default temporaryDataConvert;
