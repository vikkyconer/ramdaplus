const _R = require('../')

describe('join', function() {
  it('should return a string with all elements seperated by the seperator', function() {
    const response = _R.join([ 'a', 'b', 'c' ], '~');
    expect(response).toEqual('a~b~c');
  })
})
