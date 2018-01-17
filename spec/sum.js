const _R = require('../')

describe('sum', function() {
  it('should add all the integers in the array', function() {
    const sum = _R.sum([1,2,3]);
    expect(sum).toBe(6)
  })

  it('should strings in the array', function() {
    const sum = _R.sum([ 'vikas', 'chandra' ]);
    expect(sum).toBe( 'vikaschandra' )
  })

  it('should strings  and integers in the array', function() {
    const sum = _R.sum([ 'vikas', 10 ]);
    expect(sum).toBe( 'vikas10' )
  })

  it('should return [ 0 ] if value is passed and array of objects is not passed', function() {
    const sum = _R.sum([ 'vikas', 10 ], [ 'vikas' ]);
    expect(sum).toEqual( [ 0 ] )
  })

  it('should add integer values of specific key', function() {
    const array = [ { subject: 'english', marks: 88 }, { subject: 'maths', marks: 90 } ]
    const sum = _R.sum( array, [ 'marks' ] );
    expect(sum).toEqual([ 178 ])
  })

  it('should return sum of the values of the key if key is passed without array', function() {
    const array = [ { subject: 'english', marks: 88 }, { subject: 'maths', marks: 90 } ]
    const sum = _R.sum( array, 'marks' );
    expect(sum).toEqual( 178 )
  })

  it('should add strings values of specific key', function() {
    const array = [ { subject: 'english', marks: 88 }, { subject: 'maths', marks: 90 } ]
    const sum = _R.sum( array, [ 'subject' ] );
    expect(sum).toEqual([ 'englishmaths' ])
  })

  it('should add strings and integer values of specific key', function() {
    const array = [ { subject: 'english', marks: 88 }, { subject: 9, marks: 90 } ]
    const sum = _R.sum( array, [ 'subject' ] );
    expect(sum).toEqual([ 'english9' ])
  })

  it('should return 0 if unknown key is passed', function() {
    const array = [ { subject: 'english', marks: 88 }, { subject: 9, marks: 90 } ]
    const sum = _R.sum( array, [ 'totalMarks' ] );
    expect(sum).toEqual( [ 0 ] )
  })
})
