/** Math utilities — small, pure helpers. */

/** Clamp `v` into the inclusive range [min, max]. */
export function clamp(v: number, min: number, max: number): number {
  if (min > max) throw new RangeError("min must be <= max");
  return Math.min(Math.max(v, min), max);
}

/** Linear interpolation between `a` and `b` by `t` (unclamped). */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/** Round `v` to `digits` decimal places (default 0). */
export function roundTo(v: number, digits = 0): number {
  const f = 10 ** digits;
  return Math.round(v * f) / f;
}
