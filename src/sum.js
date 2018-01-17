const sum = function(array, values) {
  const firstValue = array[0];
  const updatedArray = array.slice(1);

  if(values) {
    return (Array.isArray(values))
      ? calculatedSumOfValues(firstValue, updatedArray, values )
      : calculateValueSum(firstValue, updatedArray, values)
  }
  return updatedArray.reduce((acc, value) => {
    return acc + value;
  }, firstValue)
}

const calculatedSumOfValues = function(firstValue, array, values ) {
  return values.map((value) => {
    return calculateValueSum(firstValue, array, value);
  })
}

const calculateValueSum = function(firstValue, array, value) {
  return ( !firstValue[value] ) ? 0 
    : array.reduce((acc, currentObject) => {
      return acc + currentObject[value];
    }, firstValue[value]);
}

module.exports = sum;
