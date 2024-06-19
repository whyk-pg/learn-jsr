import { $ } from "jsr:@david/dax@^0.40.1";
import { parseArgs } from "jsr:@std/cli@^0.224.0";
import {
  CONFIG_FILE_NAME,
  getJsrVersionConfig,
  mergeConfigFile,
} from "./config.ts";

const args = parseArgs(Deno.args);
const versionTag = args._[0];
if (!versionTag) throw new TypeError("Can't find version tag");
const version = versionTag.toString().replace("v", "");

const config = getJsrVersionConfig(version);
const { mergedConfigFileData } = await mergeConfigFile(config);

const encoder = new TextEncoder();
await Deno.writeFile(
  CONFIG_FILE_NAME,
  encoder.encode(JSON.stringify(mergedConfigFileData)),
);
await $`deno fmt ${CONFIG_FILE_NAME}`.quiet();
$.log(`Created ${CONFIG_FILE_NAME} with ${versionTag}`);
