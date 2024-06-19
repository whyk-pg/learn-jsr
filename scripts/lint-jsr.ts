import { $ } from "jsr:@david/dax@^0.40.1";
import {
  CONFIG_FILE_NAME,
  getJsrVersionConfig,
  mergeConfigFile,
} from "./config.ts";

const jsrConfig = getJsrVersionConfig("v0.0.0");
const { mergedConfigFileData, configFileData } = await mergeConfigFile(
  jsrConfig,
);

const encoder = new TextEncoder();
await Deno.writeFile(
  CONFIG_FILE_NAME,
  encoder.encode(JSON.stringify(mergedConfigFileData)),
);
try {
  await $`deno lint`;
} finally {
  await Deno.writeFile(
    CONFIG_FILE_NAME,
    encoder.encode(JSON.stringify(configFileData)),
  );
  await $`deno fmt ${CONFIG_FILE_NAME}`.quiet();
}
