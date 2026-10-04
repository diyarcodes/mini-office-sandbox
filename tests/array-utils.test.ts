import { describe, expect, it } from "vitest";
import { chunk, uniq } from "../src/lib/array-utils.js";

describe("chunk", () => {
  it("splits into slices of at most size", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });
  it("returns an empty array for an empty input", () => {
    expect(chunk([], 3)).toEqual([]);
  });
  it("returns a single chunk when size exceeds the length", () => {
    expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
  });
  it("returns equal chunks for an exact multiple", () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
  it("returns one chunk per element when size is 1", () => {
    expect(chunk(["a", "b", "c"], 1)).toEqual([["a"], ["b"], ["c"]]);
  });
  it("works for non-number element types", () => {
    expect(chunk([{ id: 1 }, { id: 2 }], 1)).toEqual([[{ id: 1 }], [{ id: 2 }]]);
  });
  it("does not mutate the input", () => {
    const input = [1, 2, 3];
    chunk(input, 2);
    expect(input).toEqual([1, 2, 3]);
  });
  it("rejects size < 1", () => {
    expect(() => chunk([1, 2], 0)).toThrow(RangeError);
    expect(() => chunk([1, 2], -1)).toThrow(RangeError);
  });
});

describe("uniq", () => {
  it("removes duplicates preserving first-occurrence order", () => {
    expect(uniq([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });
  it("removes duplicate strings", () => {
    expect(uniq(["a", "a", "b"])).toEqual(["a", "b"]);
  });
  it("returns an empty array for an empty input", () => {
    expect(uniq([])).toEqual([]);
  });
  it("returns the input values unchanged when there are no duplicates", () => {
    expect(uniq([3, 1, 2])).toEqual([3, 1, 2]);
  });
  it("keeps a single NaN (SameValueZero equality)", () => {
    const result = uniq([NaN, NaN]);
    expect(result).toHaveLength(1);
    expect(result[0]).toBeNaN();
  });
  it("treats 0 and -0 as equal (SameValueZero equality)", () => {
    expect(uniq([0, -0, 1])).toEqual([0, 1]);
  });
  it("returns a new array and does not mutate the input", () => {
    const input = [1, 2, 2, 3, 1];
    const result = uniq(input);
    expect(result).not.toBe(input);
    expect(input).toEqual([1, 2, 2, 3, 1]);
  });
});
