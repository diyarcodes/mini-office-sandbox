import { describe, expect, it } from "vitest";
import { clamp, lerp, roundTo } from "../src/lib/math-utils.js";

describe("clamp", () => {
  it("keeps in-range values", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });
  it("clamps below", () => {
    expect(clamp(-3, 0, 10)).toBe(0);
  });
  it("clamps above", () => {
    expect(clamp(42, 0, 10)).toBe(10);
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
