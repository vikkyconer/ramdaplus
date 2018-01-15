const find = function(array, value, key) {
  return array.find(( object ) => {
    if(typeof( object ) === "object") {
      return object[key] === value;
    }
    return object === value;
  })
}

module.exports = find;
