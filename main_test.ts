import { assertEquals } from "jsr:@std/assert@0.217";
import { add } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});
