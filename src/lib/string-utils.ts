/** String utilities — small, pure helpers. */

/** Uppercase the first character of `s` (rest unchanged). */
export function capitalize(s: string): string {
  if (s.length === 0) return s;
  return s[0]!.toUpperCase() + s.slice(1);
}

/** Truncate `s` to at most `max` characters, appending `suffix` (default "…") when cut. */
export function truncate(s: string, max: number, suffix = "…"): string {
  if (max < 0) throw new RangeError("max must be >= 0");
  if (s.length <= max) return s;
  const cut = s.slice(0, Math.max(0, max - suffix.length));
  return cut + suffix;
}

/** Convert a string into a URL slug: lowercase, non-alphanumerics → dashes, trimmed. */
export function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
