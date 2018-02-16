const toPairs = function(object) {
  const keys = Object.keys(object);
  return keys.reduce((acc, key) => {
    acc.push([ key, object[key] ])
    return acc
  }, [])
}

module.exports = toPairs;
