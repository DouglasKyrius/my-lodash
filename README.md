# Implementing Lodash.js

> ### "Number" methods:

## [.clamp()](https://lodash.com/docs/4.17.15#clamp)

Clamps number within the inclusive lower and upper bounds.

.clamp() takes three arguments: a number, a lower bound, and an upper bound

.clamp() modifies the provided number to be within the two provided bounds

If the provided number is smaller than the lower bound, it will return the lower bound as the final number

If the number is larger than the upper bound, it will return the upper bound as the final number

If the number is already within the two bounds, it will return the number as the final number
#### Example
``` js
_.clamp(-10, -5, 5);
// => -5
 
_.clamp(10, -5, 5);
// => 5
```
