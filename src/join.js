const join = function(array, seperator) {
  return array.reduce((acc, value, index) => {
    acc = acc.concat(value);
    if(index !== array.length - 1) {
      acc = acc.concat(seperator)
    }
    return acc;
  }, '');
}

module.exports = join;
