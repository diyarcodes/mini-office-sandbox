/** Math utilities — small, pure helpers. */

/**
 * Constrains `v` to the inclusive range [min, max].
 *
 * @param value - The value to constrain.
 * @param min - Lower bound of the range.
 * @param max - Upper bound of the range.
 * @returns `value` unchanged when it is already in range, otherwise the nearest bound.
 * @throws {@link RangeError} When `min` is greater than `max`.
 */
export function clamp(value: number, min: number, max: number): number {
  if (min > max) throw new RangeError("min must be <= max");
  return Math.min(Math.max(value, min), max);
}

/** Linear interpolation between `a` and `b` by `t` (unclamped). */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/**
 * Computes the arithmetic mean of `values`.
 *
 * @param values - The numbers to average.
 * @returns The sum of `values` divided by its length.
 * @throws {@link RangeError} When `values` is empty.
 */
export function average(values: number[]): number {
  if (values.length === 0) throw new RangeError("values must not be empty");
  return values.reduce((total, v) => total + v, 0) / values.length;
}

/** Round `v` to `digits` decimal places (default 0). */
export function roundTo(v: number, digits = 0): number {
  const f = 10 ** digits;
  return Math.round(v * f) / f;
}
