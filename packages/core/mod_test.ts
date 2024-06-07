import { assertEquals } from "jsr:@std/assert@0.217";
import { add, multiple, subtra } from "./mod.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});
Deno.test(function subtraTest() {
  assertEquals(subtra(2, 3), -1);
});
Deno.test(function multipleTest() {
  assertEquals(multiple(2, 3), 6);
});
