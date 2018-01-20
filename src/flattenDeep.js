const flattenDeep = function(array) {
  if(Array.isArray(array)) {
    return array.reduce(( acc, value ) => {
      if(Array.isArray(value)) {
        acc = acc.concat( flat(value) );
      }
      else {
        acc.push(value);
      }
      return acc;
    }, []);
  }
  return 'array required';
}


const flat = function(array) {
  const resp = array.reduce(( acc, value ) => {
    if(Array.isArray(value)) {
      const flatVal = flat(value);
      acc = acc.concat(flatVal);
    }
    else {
      acc.push(value);
    }
    return acc;
  }, []);
  return resp
}

module.exports = flattenDeep;
