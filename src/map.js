const map = function(array, func) {
  if(Array.isArray(array)) {
    return array.map((value) => {
      if(typeof(value) === "object") {
        const values = Object.values(value)
        const keys = Object.keys(value)
        return values.map((value, index) => {
          return { [ keys[index]]: func(value) }
        })
      }else {
        return func(value);
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

module.exports = map;
