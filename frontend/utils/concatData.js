function concatData(originDataset, newData) {
  const newDataset = JSON.parse(JSON.stringify(originDataset));
  newData.datasets.forEach((dataset) => {
    for (let i = 0; i < newDataset.datasets.length; i += 1) {
      if (newDataset.labels.length >= 20) {
        newDataset.datasets[i].data.splice(0, dataset.data.length);
        newDataset.labels.splice(0, dataset.data.length);
      }
      newDataset.datasets[i].label = dataset.label;
      newDataset.datasets[i].data = newDataset.datasets[i].data.concat(dataset.data);
    }
  });
  newDataset.labels = newDataset.labels.concat(newData.labels);

  return newDataset;
}

export default concatData;
