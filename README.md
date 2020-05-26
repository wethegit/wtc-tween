# WTC Tween

`wtc-tween` provides a way to create simple tweens without the need for a massive library.

## Install with npm

`npm i wtc-tween`

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

## Examples

### Basic

```js
import tween from "wtc-tween";

tween(0, 1, (value) => {
  // Do stuff with value
});
```

### Array of values

```js
import tween from "wtc-tween";

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
import tween, { easing } from "wtc-tween";

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

## ES5 and browsers

You can also use this in the browser but you will still need `node` and `npm` to compile this project.

1. Clone this repo
2. `cd` into the directory
3. Install deps with `npm i`
4. Build the lib with `npm run build`

The files will be compiled to the `dist/` folder.

### Older browsers (no module)

For older browsers use the file `dist/wtc-tween.umd.js`

```html
<script src="./wtc-tween.umd.js"></script>
<script>
  const tween = window.wtcTween["default"];
  const easing = window.wtcTween["easing"];
  tween(
    0,
    1,
    function (val) {
      // Do stuff
    },
    { timingFunction: easing.sineOut }
  );
</script>
```

### Newer browsers (module)

If targetting browsers that support modules, use `dist/wtc-tween.modern.js`:

```html
<script type="module">
  import tween, { easing } from "./wtc-tween.modern.js";

  tween(0, 1, function (val) {
    // Do stuff
  });
</script>
```
