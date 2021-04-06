# WTC Tween

`wtc-tween` provides a way to create simple tweens without the need for a massive library.

## Install

`npm i wtc-tween`

You can also use it directly as a module from skypack.  
```js
import tween from 'https://cdn.skypack.dev/wtc-tween'
```

## Usage

```js
tween(from: Number|Array[Numbers], to: Number|Array[Numbers], callback: Function, options: Object);
```

**from**: _Number_ or _Array[Numbers]_  
If passing an array of numbers, make sure that `from` and `to` have the same order and length.

**to**: _Number_ or _Array[Numbers]_

**callback**: _Function_  
Receives the _Number_|_Array[Numbers]_ current value.

**options**: _Object_  
**options.duration**: _Number_ - default 1000  
The duration in miliseconds for the tween.  

**options.timingFunction**: _Function_ - default `easings.linear`  
The timing function to be used by the tween.  

**options.onComplete**: _Function_ - default `null`  
A function to be called after completion of the tween.

## Examples

### Basic

```js
import tween from 'https://cdn.skypack.dev/wtc-tween';

tween(0, 1, (value) => {
  // Do stuff with value
});
```

### Array of values

```js
import tween from 'https://cdn.skypack.dev/wtc-tween';

tween([0, 50, 2100], [1, 200, 1000], (value) => {
  for (let val of value) {
    // Do stuff with value
  }
});
```

### Cancel tween
```js
const mytween = tween(0,1);
// whenever you need to cancel
cancelAnimationFrame(mytween);
```

### With options

```js
import tween, { easing } from 'https://cdn.skypack.dev/wtc-tween'

tween(
  0,
  1,
  (value) => {
    // Do stuff with value
  },
  {
    duration: 400,
    timingFunction: easing.sineOut,
  }
);
```

## Easings

This library also comes with some basic easing functions included but feel free to use other easing libraries like [easing-functions](https://www.npmjs.com/package/easing-functions).

### Included easings

- linear
- sineIn
- sineOut
