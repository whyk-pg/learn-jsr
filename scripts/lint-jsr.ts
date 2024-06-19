import { $ } from "jsr:@david/dax@^0.40.1";
import { getJsrConfig } from "./config.ts";

const jsrConfig = getJsrConfig("v0.0.0");
const CONFIG_FILE_NAME = "deno.json";
const configFileData = JSON.parse(await Deno.readTextFile(CONFIG_FILE_NAME));
const mergedConfigFileData = {
  ...jsrConfig,
  ...configFileData,
};

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
