const _R = require('../')

describe('pull', function() {
  it('should pull all elements matching the other argument', function() {
    const updatedArray = _R.pull([1,2,3,1,3,4,1], 1, 3);
    expect(updatedArray).toEqual([ 2, 4 ])
  })
})
