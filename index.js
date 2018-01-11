// TODO: correct names
exports.sum = function(array, values) {
  if(values) {
    return values.map((value) => {
      return array.reduce((acc, currentObject) => {
        return acc + currentObject[value];
      }, 0)
    })
  }
  return array.reduce((acc, value) => {
    return acc + value;
  }, 0)
}

exports.filter = function(array, func) {
  if(!Array.isArray(array)) {
    const values = Object.values(array)
    const keys = Object.keys(array)
    return values.reduce(( acc, value, index ) => {
      if(func(value)) {
        acc.push({ [keys[index]]: value })
      }
      return acc;
    }, [])
  }
  return array.filter(func);
}

exports.find = function(array, value, key) {
  return array.find(( object ) => {
    if(typeof( object ) === "object") {
      return object[key] === value;
    }
    return object === value;
  })
}

exports.map = function(array, func) {
  if(Array.isArray(array)) {
    return array.map((value) => {
      if(typeof(value) === "object") {
        const values = Object.values(value)
        const keys = Object.keys(value)
        return values.map((value, index) => {
          return { [ keys[index]]: func(value) }
        })
      }
    })
  }
  if(typeof(array) === "object") {
    const values = Object.values(array)
    const keys = Object.keys(array)
    return values.map((value, index) => {
      return { [ keys[index]]: func(value) }
    })
  }
}
