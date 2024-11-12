# is-divisible-by-seventeen

![Monthly Downloads][dwnld-img]
![NPM version][npmv-img]
![GitHub Stars][stars-img]
<br>
![Banner][banner]

This library is designed to help determine if a number is divisible by 17. This was inspired by the fact that many of the multiples of 17 are relatively unknown. For example, I often forget that 51 actually happens to be divisible by 17 because it equals 17*3. Therefore, this library gives an easy way to clear any of this confusion.

# Example

Here is an example use case:

```js
var is_divisible_by_seventeen = require("is-divisible-by-seventeen");

const num = 289;
const result = is_divisible_by_seventeen(num);
console.log(result); // Prints "true"
```

[dwnld-img]: https://img.shields.io/npm/dm/is-divisible-by-seventeen
[npmv-img]: https://img.shields.io/npm/v/is-divisible-by-seventeen
[stars-img]: https://img.shields.io/github/stars/davidob1/is-divisible-by-seventeen
[banner]: https://nodei.co/npm/is-divisible-by-seventeen.png?downloads=true&stars=true
