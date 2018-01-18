const flatten = function(array) {
  if(Array.isArray(array)) {
    return array.reduce(( acc, value ) => {
      if(Array.isArray(value)) {
        value.forEach((val) => {
          acc.push(val);
        })
      }
      else {
        acc.push(value);
      }
      return acc;
    }, []);
  }
  return 'array required';
}

module.exports = flatten;
