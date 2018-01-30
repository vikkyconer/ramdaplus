const pull = function(array, ...values) {
  return values.reduce((acc, value) => {
    acc = acc.filter( val => val !== value );
    return acc;
  }, array);
}

module.exports = pull;
