const _R = require('../')

describe('head', function() {
  it('should return first element of the array when non-empty array is passed', function() {
    const array = [ 1, 2, 3 ];
    const response = _R.head(array);
    expect(response).toEqual(1);
  })

  it('should return undefined when empty array is passed', function() {
    const array = [];
    const response = _R.head(array);
    expect(response).toEqual(undefined);
  })
})

