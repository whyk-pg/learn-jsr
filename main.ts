export function add(a: number, b: number): number {
  return a + b;
}
export function subtra(a: number, b: number): number {
  return a - b;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
  console.log("Add 3 - 2 =", add(3, 2));
}
