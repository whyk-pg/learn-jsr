import { $ } from "jsr:@david/dax@^0.40.1";
import { parseArgs } from "jsr:@std/cli@^0.224.0";

const args = parseArgs(Deno.args);
const versionTag = args._[0];
if (!versionTag) throw new TypeError("Can't find version tag");
const version = versionTag.toString().replace("v", "");

const config = {
  name: "@whyk/greeting",
  version,
  exports: {
    ".": "./main.ts",
    "./core": "./packages/core/mod.ts",
    "./cli": "./packages/cli/mod.ts",
  },
};

const encoder = new TextEncoder();
await Deno.writeFile(
  "jsr.json",
  encoder.encode(JSON.stringify(config)),
);
await $`deno fmt jsr.json`.quiet();
$.log(`Created jsr.json with ${versionTag}`);
