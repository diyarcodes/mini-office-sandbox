import { describe, expect, it } from "vitest";
import { chunk, groupBy } from "../src/lib/array-utils.js";

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

describe("groupBy", () => {
  it("groups elements by the returned key", () => {
    expect(groupBy(["a", "ab", "abc"], (s) => s.length)).toEqual({
      1: ["a"],
      2: ["ab"],
      3: ["abc"],
    });
  });
  it("preserves original order within each group", () => {
    expect(groupBy([1, 2, 3, 4], (n) => n % 2)).toEqual({
      0: [2, 4],
      1: [1, 3],
    });
  });
  it("returns an empty object for an empty input", () => {
    expect(groupBy([], (n: number) => n)).toEqual({});
  });
  it("groups elements whose key is undefined under 'undefined'", () => {
    expect(groupBy([1, 2, 3], (n) => (n % 2 === 0 ? n : undefined))).toEqual({
      undefined: [1, 3],
      2: [2],
    });
  });
  it("groups elements whose key is null under 'null'", () => {
    expect(groupBy(["x", "y"], (s) => (s === "x" ? null : "y"))).toEqual({
      null: ["x"],
      y: ["y"],
    });
  });
  it("emits groups in first-appearance order", () => {
    expect(Object.keys(groupBy(["pear", "apple", "plum"], (s) => s[0]))).toEqual(["p", "a"]);
  });
  it("keeps all elements sharing a key in one group", () => {
    expect(groupBy(["b", "a", "b"], (s) => s)).toEqual({ b: ["b", "b"], a: ["a"] });
  });
  it("does not mutate the input", () => {
    const input = [1, 2, 3, 4];
    groupBy(input, (n) => n % 2);
    expect(input).toEqual([1, 2, 3, 4]);
  });
});
