const _R = require('../')

describe('reverse', function() {
  it('should reverse the array', function() {
    const updatedArray = _R.reverse([ 1, 2, 3 ]);
    expect(updatedArray).toEqual([ 4, 2, 1 ])
  })
})
