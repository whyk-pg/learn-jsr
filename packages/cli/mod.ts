import { parseArgs } from "jsr:@std/cli@^0.224.6";

export const cli = (): void => {
  const args = parseArgs(Deno.args);
  console.log(args._);
};
