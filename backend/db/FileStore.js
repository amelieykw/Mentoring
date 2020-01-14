import fs from 'fs';

function saveArrayToFile(arrayData, path) {
  fs.writeFileSync(path, JSON.stringify(arrayData), 'utf8');
}

function loadArrayFromFile(path) {
  try {
    return JSON.parse(fs.readFileSync(path, 'utf8'));
  } catch (error) {
    return [];
  }
}

export default function (object) {
  const observableDataset = object;

  return (filePath) => {
    const add = observableDataset.add.bind(observableDataset);
    const getAll = observableDataset.getAll.bind(observableDataset);

    add(loadArrayFromFile(filePath));

    observableDataset.add = (...args) => {
      const res = add(...args);
      saveArrayToFile(getAll(), filePath);
      return res;
    };
  };
}
