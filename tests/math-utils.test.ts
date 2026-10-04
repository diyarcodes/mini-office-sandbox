import { describe, expect, it } from "vitest";
import { average, clamp, lerp, roundTo, sum } from "../src/lib/math-utils.js";

describe("clamp", () => {
  it("keeps in-range values", () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(5, 1, 10)).toBe(5);
  });
  it("clamps below", () => {
    expect(clamp(-3, 0, 10)).toBe(0);
  });
  it("clamps above", () => {
    expect(clamp(42, 0, 10)).toBe(10);
    expect(clamp(15, 0, 10)).toBe(10);
  });
  it("keeps the bounds themselves", () => {
    expect(clamp(0, 0, 10)).toBe(0);
    expect(clamp(10, 0, 10)).toBe(10);
  });
  it("rejects min > max", () => {
    expect(() => clamp(1, 10, 0)).toThrow(RangeError);
    expect(() => clamp(5, 10, 0)).toThrow(RangeError);
  });
});

describe("lerp", () => {
  it("returns a at t=0", () => {
    expect(lerp(1, 3, 0)).toBe(1);
  });
  it("returns b at t=1", () => {
    expect(lerp(1, 3, 1)).toBe(3);
  });
  it("interpolates midway", () => {
    expect(lerp(1, 3, 0.5)).toBe(2);
  });
});

describe("roundTo", () => {
  it("rounds to integers by default", () => {
    expect(roundTo(2.6)).toBe(3);
  });
  it("rounds to N decimals", () => {
    expect(roundTo(3.14159, 2)).toBe(3.14);
  });
});

describe("sum", () => {
  it("returns 0 for an empty array", () => {
    expect(sum([])).toBe(0);
  });
  it("adds positive integers", () => {
    expect(sum([1, 2, 3])).toBe(6);
  });
  it("handles negatives and decimals", () => {
    expect(sum([-1, 2.5, -0.5])).toBe(1);
  });
  it("returns the value itself for a single element", () => {
    expect(sum([4.25])).toBe(4.25);
  });
  it("does not mutate the input", () => {
    const values = [1, 2, 3];
    sum(values);
    expect(values).toEqual([1, 2, 3]);
  });
});

describe("average", () => {
  it("returns the mean", () => {
    expect(average([1, 2, 3, 4])).toBe(2.5);
  });
  it("cancels out to zero for symmetric values", () => {
    expect(average([-1, 1])).toBe(0);
  });
  it("throws RangeError for an empty array instead of returning NaN", () => {
    expect(() => average([])).toThrow(RangeError);
  });
  it("returns the value itself for a single element", () => {
    expect(average([4.25])).toBe(4.25);
  });
  it("handles negatives and decimals", () => {
    expect(average([-2, -1, 0, 3])).toBe(0);
    expect(average([1.5, 2.5])).toBe(2);
  });
  it("does not mutate the input", () => {
    const values = [1, 2, 3];
    average(values);
    expect(values).toEqual([1, 2, 3]);
  });
});
