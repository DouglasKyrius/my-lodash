# Implementing Lodash.js

> ## "Number" methods:

### [`_.clamp()`](https://lodash.com/docs/4.17.15#clamp)

Clamps number within the inclusive lower and upper bounds.
```
.clamp() takes three arguments: a number, a lower bound, and an upper bound

.clamp() modifies the provided number to be within the two provided bounds

If the provided number is smaller than the lower bound, it will return the lower bound as the final number

If the number is larger than the upper bound, it will return the upper bound as the final number

If the number is already within the two bounds, it will return the number as the final number
```
#### Example
``` js
_.clamp(-10, -5, 5);
// => -5
 
_.clamp(10, -5, 5);
// => 5
```

### [`_.inRange()`](https://lodash.com/docs/4.17.15#inRange)

Checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges.
```
.inRange() takes three arguments: a number, a start value, and an end value

.inRange() checks to see if the provided number falls within the range specified by the start and end values

If the provided number is smaller than the start value, .inRange() will return false

If the provided number is larger than or equal to the end value, .inRange() will return false

If the provided number is within the start and end values, .inRange() will return true

If no end value is provided to the method, the start value will be 0 and the end value will be the provided start value

If the provided start value is larger than the provided end value, the two values should be swapped
```
#### Example
``` js
_.inRange(3, 2, 4);
// => true
 
_.inRange(4, 8);
// => true
 
_.inRange(4, 2);
// => false
 
_.inRange(2, 2);
// => false
```

> ## "String" methods:

### [`_.words()`](https://lodash.com/docs/4.17.15#words)

Splits string into an array of its words.

```
.words() takes one argument: a string

.words() splits the string into an array of words

A word is defined by a space-separated string of characters, so each space character, ' ', indicates the end of one word and the start of the next
```
#### Example
``` js
_.words('hi there you');
// => ['hi', 'there', 'you']
 
_.words('hello yo & oi');
// => ['hello', 'yo', '&', 'oi']
```

### [`_.pad()`](https://lodash.com/docs/4.17.15#pad)

Pads string on the left and right sides if it's shorter than length.

```
.pad() takes two arguments: a string and a length

.pad() adds spaces evenly to both sides of the string to make it reach the desired length

Extra padding is added to the end of the string if an odd amount of padding is required to reach the specified length
```
#### Example
``` js
_.pad('hi', 6);
// => '  hi  '

_.pad('abc', 8);
// => '  abc   '

_.pad('abc', 3);
// => 'abc'
```

> ## "Object" methods:

### [`_.has()`](https://lodash.com/docs/4.17.15#has)

Checks if path is a direct property of object.

```
.has() takes two arguments: an object and a key

.has() checks to see if the provided object contains a value at the specified key

.has() will return true if the object contains a value at the key and will return false if not
```

#### Example
``` js
var object = {"key": "value"};

_.has(object, 'key');
// => true

_.has(object, 'notKey');
// => false
```

### [`_.invert()`](https://lodash.com/docs/4.17.15#invert)

Creates an object composed of the inverted keys and values of object.
```
.invert() takes one argument: an object

.invert() iterates through each key / value pair in the provided object and swaps the key and value
```

#### Example
``` js
var object = { 'a': 1, 'b': 2, 'c': 3 };
 
_.invert(object);
// => { '1': 'a', '2': 'b', '3': 'c' }
```

### [`_.invert()`](https://lodash.com/docs/4.17.15#invert)

This method returns the key of the first element predicate returns truthy for instead of the element itself.
```
.findKey() takes two arguments: an object and a predicate function — a function that returns a boolean value

.findKey() iterates through each key / value pair in the provided object and calls the predicate function with the value

.findKey() returns the first key that has a value that returns a truthy value from the predicate function

.findKey() returns undefined if no values return truthy values from the predicate function
```

#### Example
``` js
_.findKey(users, function(o) { return o.age < 40; });
// => 'barney'

_.findKey(users, function(o) { return o.age === 1 && o.active === true });
// => 'pebbles'
```