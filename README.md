# ramdaplus
A functional library for JS programmers. Inspired by ramda https://github.com/ramda/ . It's goal is that you should never mutate your data at server side

# Why RamdaPlus ?
I have used ramda and worked without ramda. I always tries to write immutable
code. I was able to achive this with ramda but there was something missing. So,
I decided to make Ramda Plus which is a hybrid mixture of ramda concept and
javacript core funcitons. Hope you guys enjoy using it. It is still in very
development phase so bear with me as it will be covering all of the ramda
features once we reach 1.0.0 version. Until then test it and suggest if any
room for improvement.

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
const R = require('ramda');
```

To use directly in the browser:

```html
<script src="path/to/yourCopyOf/ramda.js"></script>
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
