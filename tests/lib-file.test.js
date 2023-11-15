import { it, describe } from "node:test";
import { libFunction } from "../lib/lib-file.js";
import { strict as assert } from "node:assert";

/**
 * Docs for test: https://nodejs.org/api/test.html
 * Docs for assert: https://nodejs.org/api/assert.html
 */

describe("libFunction", () => {
  it("exports a function", async (t) => {
    assert.strictEqual(typeof libFunction, "function");
  });

  it("lib-file logs returns package version", async (t) => {
    assert.ok(libFunction() === "1.0.0");
  });
});
