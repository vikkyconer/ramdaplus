# ramdaplus
A functional library for JS programmers.Inspired by Lodash and Ramda. It's goal is that you should never mutate your data at server side

[![Build
Status](https://travis-ci.org/vikkyconer/ramdaplus.svg?branch=master)](https://travis-ci.org/vikkyconer/ramdaplus)

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
https://ramdaplus.github.io/

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

# Chunk

```bash
( array, size ) -> array
```

```bash
_R.chunk( [ 1, 2, 3, 4, 5 ], 2 );  //=> [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
```

# Concat

```bash
( array, [values] ) -> array
```

```bash
_R.concat( [ 1,2,3,4,5 ], 6, [7], [[8,9]] );  //=> [ 1, 2, 3, 4, 5, 6, 7,
[ 8, 9  ]  ]
```

# Drop

```bash
( array, size ) -> array
```

```bash
_R.drop( [ 1,2,3,4 ] );  //=> [ 2,3,4 ]
_R.drop( [ 1,2,3,4 ], 0 );  //=> [ 1,2,3,4 ]
_R.drop( [ 1,2,3,4 ], 2 );  //=> [ 3,4 ]
_R.drop( [ 1,2,3,4 ], 5 );  //=> []
```
# Drop Right

```bash
( array, size ) -> array
```

```bash
_R.dropRight( [ 1,2,3,4 ] );  //=> [ 1,2,3 ]
_R.dropRight( [ 1,2,3,4 ], 0 );  //=> [ 1,2,3,4 ]
_R.dropRight( [ 1,2,3,4 ], 2 );  //=> [ 1,2 ]
_R.dropRight( [ 1,2,3,4 ], 5 );  //=> []
```

# Flatten

```bash
( array ) -> array
```

```bash
_R.flatten( [1, [2, [3, [4]], 5]] );  //=> [1, 2, [3, [4]], 5]
_R.flatten( { a: 1, b: { c: 2 } } );  //=> 'array required'
```
# Flatten Deep

```bash
( array ) -> array
```

```bash
_R.flattenDeep( [1, [2, [3, [4]], 5]] );  //=> [1, 2, 3, 4, 5]
_R.flattenDeep( { a: 1, b: { c: 2 } } );  //=> 'array required'
```
