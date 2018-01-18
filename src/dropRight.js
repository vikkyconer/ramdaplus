const dropRight = function( array, size ) {
  if(size !== undefined) {
    if( size !== 0 ) {
      return array.slice(0, -1 * size);
    }
    return array
  }
  return array.slice(0, -1);
}

module.exports = dropRight;
