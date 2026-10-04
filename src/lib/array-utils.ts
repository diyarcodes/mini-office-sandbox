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
