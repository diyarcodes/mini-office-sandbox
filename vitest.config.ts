import path from "node:path";
import { defineConfig } from "vitest/config";

// Pin the vitest root to this directory so running tests from any cwd
// (or from inside a nested workspace) always resolves this repo's files.
export default defineConfig({
  root: path.dirname(new URL(import.meta.url).pathname),
  test: { environment: "node" },
});
