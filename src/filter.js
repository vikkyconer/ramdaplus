const filter = function(array, func) {
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

module.exports = filter;
