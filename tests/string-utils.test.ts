import { describe, expect, it } from "vitest";
import { capitalize, slugify, truncate } from "../src/lib/string-utils.js";

describe("capitalize", () => {
  it("uppercases the first character", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  it("uppercases only the first character of a multi-word string", () => {
    expect(capitalize("hello world")).toBe("Hello world");
  });
  it("leaves the rest unchanged", () => {
    expect(capitalize("hELLO")).toBe("HELLO");
  });
  it("handles empty string", () => {
    expect(capitalize("")).toBe("");
  });
  it("rejects non-string input", () => {
    expect(() => capitalize(42 as unknown as string)).toThrow(TypeError);
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
  it("collapses runs of spaces and symbols into one dash", () => {
    expect(slugify("  Multiple   spaces & symbols!! ")).toBe(
      "multiple-spaces-symbols",
    );
  });
  it("transliterates common Latin diacritics", () => {
    expect(slugify("Café Über")).toBe("cafe-uber");
  });
  it("returns an empty string for empty input", () => {
    expect(slugify("")).toBe("");
  });
  it("returns an empty string for symbol-only input", () => {
    expect(slugify("!!!")).toBe("");
  });
});
