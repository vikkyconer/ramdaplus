const compact = function(array) {
  return array.reduce((acc, current) => {
    if(current) {
      acc.push(current);
    }
    return acc;
  }, []);
}

module.exports = compact;
