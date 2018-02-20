const _R = require('../')

describe('invertObj', function() {
  it('should return an inverted object when an object is passed', function() {
    const object = { 'a': 1, 'b': 2 };
    const response = _R.invertObj(object);
    expect(response).toEqual({ '1': 'a', '2': 'b' })
  })
})

