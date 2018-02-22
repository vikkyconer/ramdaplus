const _R = require('../')

describe('zipWith', function() {
  it('should return an object after merging the provided two arrays', function() {
    const array1 = [ 'a', 'b', 'c' ];
    const array2 = [ 1, 2 ,3 ];
    const result = _R.zipWith( array1, array2 );
    expect(result).toEqual( { 'a': 1, 'b': 2, 'c': 3 } );
  })
})

