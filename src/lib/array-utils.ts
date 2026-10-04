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
 * Groups the elements of `arr` by the key returned from `keyFn`.
 *
 * @typeParam T - Element type of the input array.
 * @typeParam K - Key type returned by `keyFn`.
 * @param arr - The array to group (not mutated).
 * @param keyFn - Returns the group key for an element.
 * @returns A new object mapping each key to the elements that produced it.
 *   Keys appear in first-appearance order and elements keep their original
 *   order within a group. Keys are stringified, so `undefined` (and `null`)
 *   group under `'undefined'` / `'null'`.
 */
export function groupBy<T, K extends PropertyKey>(
  arr: T[],
  keyFn: (item: T) => K,
): Record<string, T[]> {
  const groups: Record<string, T[]> = {};
  for (const item of arr) {
    const key = String(keyFn(item));
    (groups[key] ??= []).push(item);
  }
  return groups;
}
