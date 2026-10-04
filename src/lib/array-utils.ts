/** Array utilities — small, pure helpers. */

/**
 * Splits `arr` into consecutive slices of at most `size` elements, with the
 * last slice holding the remainder.
 *
 * @typeParam T - Element type of the input array.
 * @param arr - The array to split (not mutated).
 * @param size - Maximum length of each chunk.
 * @returns A new array of chunks; empty when `arr` is empty.
 * @throws {@link RangeError} When `size` is less than 1.
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  if (size < 1) throw new RangeError("size must be >= 1");
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

/**
 * Returns a new array with duplicate values removed, preserving the
 * first-occurrence order of elements. Equality follows SameValueZero, so
 * `NaN` values deduplicate and `0` and `-0` are treated as equal.
 *
 * @typeParam T - Element type of the input array.
 * @param arr - The array to deduplicate (not mutated).
 * @returns A new array containing each distinct value once, in order of
 *   first occurrence; empty when `arr` is empty.
 */
export function uniq<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}
