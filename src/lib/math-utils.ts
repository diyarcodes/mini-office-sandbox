/** Math utilities — small, pure helpers. */

/**
 * Constrains `v` to the inclusive range [min, max].
 *
 * @param v - The value to constrain.
 * @param min - Lower bound of the range.
 * @param max - Upper bound of the range.
 * @returns `v` unchanged when it is already in range, otherwise the nearest bound.
 * @throws {@link RangeError} When `min` is greater than `max`.
 */
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
