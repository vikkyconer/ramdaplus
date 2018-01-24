const _R = require('../')

describe('fromPairs', function() {
  it('should return object when array of arrays is passed', function() {
    const array = [ [ 'a', 1 ], [ 'b', 2 ] ];
    const response = _R.fromPairs(array);
    expect(response).toEqual({ a: 1, b: 2 });
  })
})

