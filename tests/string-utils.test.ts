import { describe, expect, it } from "vitest";
import { capitalize, slugify, truncate } from "../src/lib/string-utils.js";

describe("capitalize", () => {
  it("uppercases the first character", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  it("leaves the rest unchanged", () => {
    expect(capitalize("hELLO")).toBe("HELLO");
  });
  it("handles empty string", () => {
    expect(capitalize("")).toBe("");
  });
});

describe("truncate", () => {
  it("returns the string when short enough", () => {
    expect(truncate("abc", 5)).toBe("abc");
  });
  it("cuts and appends an ellipsis", () => {
    expect(truncate("abcdef", 5)).toBe("abcd…");
  });
  it("rejects negative max", () => {
    expect(() => truncate("abc", -1)).toThrow(RangeError);
  });
});

describe("slugify", () => {
  it("slugifies a title", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });
  it("collapses punctuation and spaces", () => {
    expect(slugify("  A  B & C! ")).toBe("a-b-c");
  });
  it("trims leading/trailing dashes", () => {
    expect(slugify("--x--")).toBe("x");
  });
});
