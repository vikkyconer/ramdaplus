const intersection = function(...arrays) {
  const repeations = arrays.reduce((acc, array) => {
    array.forEach((value) => {
      acc[value] = (acc[value] !== undefined) ? parseInt(acc[value]) + 1 : 1;
    })
    return acc;
  }, {});
  const keys = Object.keys(repeations);
  const response = keys.reduce((acc, key) => {
    if(repeations[key] === arrays.length) {
      acc.push(parseInt(key));
    }
    return acc;
  }, []);
  return response;
}

module.exports = intersection;
