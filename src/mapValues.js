const mapValues = function(object, func) {
  const keys = Object.keys(object);
  var response = {};
  keys.forEach((key) => {
    const updatedValue = ( typeof(object[key]) === 'object' ) ? mapValues(object[key], func) : func(object[key]);
    response[key] = updatedValue;
  })
  return response;
}

module.exports = mapValues;
