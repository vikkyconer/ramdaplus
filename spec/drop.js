const _R = require('../')

describe('drop', function() {
  it('should drop first element of the array if no other argument passed', function() {
    const response = _R.drop([ 1,2,3,4 ]);
    expect(response).toEqual([2,3,4])
  })

  it('should drop first n elements of the array if n is passed as an argument', function() {
    const response = _R.drop([ 1,2,3,4 ], 2);
    expect(response).toEqual([3,4])
  })

  it('should drop all elements if value of n is greater than size of the array', function() {
    const response = _R.drop([ 1,2,3,4 ], 5);
    expect(response).toEqual([])
  })

  it('should not drop any element if value of n is zero', function() {
    const response = _R.drop([ 1,2,3,4 ], 0);
    expect(response).toEqual([ 1,2,3,4 ])
  })
})
