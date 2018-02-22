const zipWith = function(array1, array2) {
  return array1.reduce(( acc, key, pos ) => {
    acc[key] = array2[pos];
    return acc;
  }, {});
}

module.exports = zipWith;
