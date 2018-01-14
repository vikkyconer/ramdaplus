# ramdaplus
A functional library for JS programmers. Inspired by ramda https://github.com/ramda/ . It's goal is that you should never mutate your data at server side

# Why RamdaPlus ?
RamdaPlus gives you power of ramda and Lodash combined with some extensive features.
We have covered some basic features for now but eventually
will add all ramda and loadash functions with extensive support plus will also add extra
features.

# What's different than ramda ?
It gives you the power of javascript core functions implemented in functional
style with more extended features than ramda

# Installation

To use with node :

```bash
$ npm install ramdaplus
```

Then in console :

```javascript
const _R = require('ramdaplus');
```

## Documentation

# Sum

```bash
( [ Number/Objects ], [ values ] ) -> Number, [ Numbers ]

```

In this we provide adding normal sum with adding values in array of objects

```bash
_R.sum([1,2,3,4]); //=> 10

_R.sum([{a: 1, b: 'abc'}, { a: 2, b: 'bcd' }, { a: 3, b: 'cde' }], [ 'a' ]); //=> [ 6 ]

_R.sum([{a: 1, b: 2}, { a: 2, b: 3 }, { a: 3, b: 4 }], [ 'a', 'b' ]); //=> [ 6,
9 ]

```

# Filter

```bash
( [Number/Objects]/Object, function ) -> [Number/Object]
```

```bash
function isEven(val) {
  return val % 2 === 0;
}

function isEvenObject(val) {
  return val.a % 2 === 0;
}

_R.filter([1,2,3], isEven); //=> [ 2 ]

_R.filter([{ a: 1, b: 'abc' }, { a: 2, b: 'bcd' }, { a: 3, b: 'cde' }],
isEvenObject); //=> [ { a: 2, b: 'bcd' } ]

_R.filter( { a: 1, b: 2, c: 3 }, isEven); //=> [ { b: 2 } ]

```

# Find

```bash
( [Number/Objects], value, key ) -> Number/Object
```

```bash
_R.find([1,2,3], 2); //=> [ 2 ]

_R.find([{ a: 1, b: 'abc' }, { a: 2, b: 'bcd' }, { a: 3, b: 'cde' }],
2, 'a'); //=> [ { a: 2, b: 'bcd' } ]

_R.find([{ a: 1, b: 'abc' }, { a: 2, b: 'bcd' }, { a: 3, b: 'cde' }],
'bcd', 'b'); //=> [ { a: 2, b: 'bcd' } ]

```

# Map

```bash
( [Number/Objects]/Object, function) -> [ Number/Object ]
```

```bash
function double(val) {
  return val * 2;
}

_R.map([1,2,3], double); //=> [2, 4, 6 ]

_R.map({ a: 1, b: 2, c: 3 }, double); //=> { a: 2, b: 4, c: 6 }

_R.map([ { a: 1, b: 2, c: 3 }, { d: 4, e: 5, f: 6 } ], double); //=> [ { a: 2,
b: 4, c: 6 }, { d: 8, e: 10, f: 12 } ]

```

# Merge

```bash
( Object, Object ) -> Object
```

```bash

_R.merge( { a: 1, b: 2, c: 3 }, { a: 4, d: 3, c: 6 } ); //=> { a: 4, b: 2, c: 6,
d: 3 }

```

# CamelCase

```bash
( Object ) -> Object
```

```bash

_R.camelCase( { NoOfSchools: { NoOfClasses: 20 } } ); //=> { noOfSchools:
{ noOfClasses: 20 } }

```

# MapValues

```bash
( Object, func ) -> Object
```

```bash

function double(value) {
  return value * 2;
}

_R.mapValues( { NoOfSchools: { NoOfClasses: 20 }, NoOfStudents: 400 }, double ); //=> { NoOfSchools:
{ NoOfClasses: 40 }, NoOfStudents: 800 }

```

# Compact

```bash
( array ) -> array
```

```bash
_R.compact( [ 1, 'india', '', 2, 0, false, 3, null, undefined, NaN ] );  //=>
[ 1, 'india', 2, 3, ]
```
