export const getJsrConfig = (version: string) => ({
  name: "@whyk/greeting",
  version,
  exports: {
    ".": "./main.ts",
    "./core": "./packages/core/mod.ts",
    "./cli": "./packages/cli/mod.ts",
  },
});
