const _R = require('../')

describe('last', function() {
  it('should return last element of the array', function() {
    const last = _R.last([1,2,3]);
    expect(last).toBe(3)
  })
})
