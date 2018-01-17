const drop = function( array, size ) {
  if(size !== undefined) {
    return array.slice(size);
  }
  return array.slice(1);
}

module.exports = drop;
