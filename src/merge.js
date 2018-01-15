const merge = function(oldObj, newObj) {
  return { ...oldObj, ...newObj }
}

module.exports = merge;
