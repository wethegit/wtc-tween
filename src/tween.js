import { linear } from "./easings.js";
import { clamp, lerp } from "./utils.js";

export default function tween(
  from,
  to,
  callback,
  options = { duration: 1000, timingFunction: linear }
) {
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
  };

  return requestAnimationFrame(tweener);
}
