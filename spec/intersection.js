const _R = require('../')

describe('intersection', function() {
  it('should return array with intersection elements when two arrays are passed', function() {
    const array1 = [ 1, 2 ];
    const array2 = [ 2, 4 ];
    const response = _R.intersection(array1, array2);
    expect(response).toEqual([ 2 ]);
  })

  it('should return array with intersection elements when three arrays are passed', function() {
    const array1 = [ 1, 2 ];
    const array2 = [ 2, 4 ];
    const array3 = [ 2, 5 ];
    const response = _R.intersection(array1, array2, array3);
    expect(response).toEqual([ 2 ]);
  })
  
  it('should return empty array when no common element is found', function() {
    const array1 = [ 1, 2 ];
    const array2 = [ 2, 3 ];
    const array3 = [ 3, 4 ];
    const response = _R.intersection(array1, array2, array3);
    expect(response).toEqual([]);
  })
})

