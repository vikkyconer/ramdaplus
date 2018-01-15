const camelCase = function(object) {
  const keys = Object.keys(object);
  var response = {}
  keys.forEach((key) => {
    const updatedKey = key[0].toLowerCase() + key.substring(1);
    const updatedValue = ( typeof(object[key]) === 'object' ) ? camelCase(object[key]) : object[key];
    response[updatedKey] = updatedValue
  })
  return response;
}

module.exports = camelCase;
