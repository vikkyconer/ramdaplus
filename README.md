# ramdaplus
A functional library for JS programmers. Inspired by ramda https://github.com/ramda/ . It's goal is that you should never mutate your data at server side

# Why RamdaPlus ?
RamdaPlus gives you power of ramda with some extensive features which are
missing in ramda. We have covered some basic features for now but eventually
will add all ramda functions with extensive support plus will also add extra
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
const R = require('ramdaplus');
```

## Documentation

# Sum

```bash
( [ Number/Objects ], [ values ] ) -> Number, [ Numbers ]

```

In this we provide adding normal sum with adding values in array of objects

```bash
R.sum([1,2,3,4]); //=> 10

R.sum([{a: 1, b: 'abc'}, { a: 2, b: 'bcd' }, { a: 3, b: 'cde' }], [ 'a' ]); //=> [ 6 ]

R.sum([{a: 1, b: 2}, { a: 2, b: 3 }, { a: 3, b: 4 }], [ 'a', 'b' ]); //=> [ 6,
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

R.filter([1,2,3], isEven); //=> [ 2 ]

R.filter([{ a: 1, b: 'abc' }, { a: 2, b: 'bcd' }, { a: 3, b: 'cde' }],
isEvenObject); //=> [ { a: 2, b: 'bcd' } ]

R.filter( { a: 1, b: 2, c: 3 }, isEven); //=> [ { b: 2 } ]

```

# Find

```bash
( [Number/Objects], value, key ) -> Number/Object
```

```bash
R.find([1,2,3], 2); //=> [ 2 ]

R.find([{ a: 1, b: 'abc' }, { a: 2, b: 'bcd' }, { a: 3, b: 'cde' }],
2, 'a'); //=> [ { a: 2, b: 'bcd' } ]

R.find([{ a: 1, b: 'abc' }, { a: 2, b: 'bcd' }, { a: 3, b: 'cde' }],
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

R.map([1,2,3], double); //=> [2, 4, 6 ]

R.map({ a: 1, b: 2, c: 3 }, double); //=> { a: 2, b: 4, c: 6 }

R.map([ { a: 1, b: 2, c: 3 }, { d: 4, e: 5, f: 6 } ], double); //=> [ { a: 2,
b: 4, c: 6 }, { d: 8, e: 10, f: 12 } ] 

```

# Merge

```bash
( Object, Object ) -> Object
```

```bash

R.merge( { a: 1, b: 2, c: 3 }, { a: 4, d: 3, c: 6 } ); //=> { a: 4, b: 2, c: 6,
d: 3 }

```
