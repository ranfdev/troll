import "./setup.js";

import { test } from "./uvu.js";
import * as assert from "./assert.js";
import GLib from "gi://GLib";

import { atob, btoa } from "../src/std/base64.js";

const loop = GLib.MainLoop.new(null, false);
test.after(() => {
  loop.quit();
});

test("btoa", () => {
  assert.is(btoa("foobar"), "Zm9vYmFy");
});

test("atob", () => {
  assert.is(atob("Zm9vYmFy"), "foobar");
});

// https://gitlab.gnome.org/GNOME/gjs/-/issues/285
test("NUL termination", () => {
  const encoded = btoa("hello\0world");
  const decoded = atob(encoded);

  assert.is.not(decoded, "hello");
  assert.is(decoded, "hello\0world");
});

test.run();
loop.run();
