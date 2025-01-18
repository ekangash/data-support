/**
 * @link https://github.com/timocov/dts-bundle-generator/blob/HEAD/src/config-file/README.md
 */
const config = {
  compilationOptions: {
    /**
     * Path to the tsconfig file that will be used for the compilation.
     * Must be set if entries count more than 1.
     */
    preferredConfigPath: './tsconfig.app.json',
  },
  entries: [
    {
      filePath: "./main.tsx",
      outFile: "./build/dist/index.d.ts",
      noCheck: false,
    },
  ],
};

module.exports = config;
