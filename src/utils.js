export function clamp(a, b, v) {
  return Math.min(b, Math.max(a, v));
}

// Lerp function. Accepts numbers or arrays.
export function lerp(v1, v2, d) {
  if (v1 instanceof Array && v1.length <= v2.length) {
    const r = [];
    v1.forEach(function (v, i) {
      r[i] = v + d * (v2[i] - v);
    });
    return r;
  }
  return v1 + d * (v2 - v1);
}
