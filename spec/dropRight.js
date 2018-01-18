const _R = require('../')

describe('dropRight', function() {
  it('should drop last element of the array if no other argument passed', function() {
    const response = _R.dropRight([ 1,2,3,4 ]);
    expect(response).toEqual([1,2,3])
  })

  it('should drop last n elements of the array if n is passed as an argument', function() {
    const response = _R.dropRight([ 1,2,3,4 ], 2);
    expect(response).toEqual([1,2])
  })

  it('should drop all elements if value of n is greater than size of the array', function() {
    const response = _R.dropRight([ 1,2,3,4 ], 5);
    expect(response).toEqual([])
  })

  it('should not drop any element if value of n is zero', function() {
    const response = _R.dropRight([ 1,2,3,4 ], 0);
    expect(response).toEqual([ 1,2,3,4 ])
  })
})
