const sum = function(array, values) {
  if(values) {
    if(!Array.isArray(values)) {
      const firstValue = array[0];
      const updatedArray = array.slice(1);
      if(!firstValue[values]) {
        return 0;
      }
      return updatedArray.reduce((acc, currentObject) => {
        return acc + currentObject[values];
      }, firstValue[values])
    }
    return values.map((value) => {
      const firstValue = array[0];
      const updatedArray = array.slice(1);
      if(!firstValue[value]) {
        return 0;
      }
      return updatedArray.reduce((acc, currentObject) => {
        return acc + currentObject[value];
      }, firstValue[value])
    })
  }
  const firstValue = array[0];
  const updatedArray = array.slice(1);
  return updatedArray.reduce((acc, value) => {
    return acc + value;
  }, firstValue)
}

module.exports = sum;
