const fromPairs = function(array) {
  return array.reduce((acc, value) => {
    acc[value[0]] = value[1];
    return acc;
  }, {})
}

module.exports = fromPairs;
