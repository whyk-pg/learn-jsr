import { parseArgs } from "@std/cli";

export const cli = () => {
  const args = parseArgs(Deno.args);
  console.log(args._);
};
