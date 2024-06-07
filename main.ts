import { add, multiple, subtra } from "./packages/core/mod.ts";
import { cli } from "./packages/cli/mod.ts";

console.log({
  add: add(2, 3),
  subtra: subtra(2, 3),
  multiple: multiple(2, 3),
});

cli();
