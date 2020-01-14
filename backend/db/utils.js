
function copyObject(object) {
  return JSON.parse(JSON.stringify(object));
}

export default { copyObject };
