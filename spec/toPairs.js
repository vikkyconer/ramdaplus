const _R = require('../')

describe('toPairs', function() {
  it('should return array of small arrays of length 2 of key and value of object', function() {
    const object = { a: 1, b: 2 };
    const response = _R.toPairs(object);
    expect(response).toEqual([ [ 'a', 1 ], [ 'b', 2 ] ]);
  })
})

