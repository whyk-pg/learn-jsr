import { parseArgs } from "@std/cli";

export const cli = (): void => {
  const args = parseArgs(Deno.args);
  console.log(args._);
};
