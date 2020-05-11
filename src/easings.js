// The easing functions. They expect a delta between 0, and 1
export function linear(d) {
  return d;
}

export function sineIn(d) {
  return 1 - Math.cos(d * Math.PI * 0.5);
}

export function sineOut(d) {
  return Math.sin(d * Math.PI * 0.5);
}
