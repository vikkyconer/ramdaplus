const inverObj = function(object) {
  const keys = Object.keys(object);
  return keys.reduce((acc, key) => {
    acc[object[key]] = key;
    return acc;
  }, {})
}

module.exports = inverObj;
