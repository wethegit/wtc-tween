import { linear } from "./easings.js";
import { clamp, lerp } from "./utils.js";

const DEFAULT_OPTIONS = { duration: 1000, timingFunction: linear, onComplete: null };

export default function tween(
  from = 0,
  to = 1,
  callback = null,
  options = {}
) {
  options = Object.assign({}, DEFAULT_OPTIONS, options);
  
  if (
    from === undefined ||
    (typeof from !== "number" && typeof from !== "object")
  )
    throw Error("Tween is missing `from` paramenter");

  if (to === undefined || (typeof to !== "number" && typeof to !== "object"))
    throw Error("Tween is missing `to` parameter");

  if (typeof from !== typeof to)
    throw Error("`to` and `from` parameters need to be of same type");

  let starttime = null;

  const tweener = function (delta) {
    if (starttime === null) starttime = delta;
    // This gives us the normalised time, based on the start, end, and animation length
    const playhead = clamp(0, 1, (delta - starttime) / options.duration);
    const d = options.timingFunction(playhead);

    callback(lerp(from, to, d), playhead);

    if (delta - starttime < options.duration)
      return requestAnimationFrame(tweener);
    else if (options.onComplete)
      options.onComplete();
  };

  return requestAnimationFrame(tweener);
}
