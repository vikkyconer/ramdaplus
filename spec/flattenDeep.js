const _R = require('../')

describe('flattenDeep', function() {
  it('should flatten the array to first level', function() {
    const array = [1, [2, [3, [4]], 5]];
    const response = _R.flattenDeep(array);
    expect(response).toEqual([1, 2, 3, 4, 5]);
  })

  it('should return error if object is passed', function() {
    const object = { a: 1, b: { c: 1 } };
    const response = _R.flattenDeep(object);
    expect(response).toEqual('array required');
  })

  it('should flatten the array to first level', function() {
    const array = [1, [2, [3, [4]], 5], 6, [ 7, [ 8 ] ]];
    const response = _R.flattenDeep(array);
    expect(response).toEqual([1, 2, 3, 4, 5, 6, 7, 8 ]);
  })
})
