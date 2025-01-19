/// <reference types="vitest" />
import path from "path";
import { defineConfig } from "vite";
import packageJson from "./package.json";
import { LibraryFormats } from "vite";
import { ModuleFormat } from "rollup";

const getPackageName = () => {
  return packageJson.name;
};

const getPackageNameCamelCase = () => {
  try {
    return getPackageName().replace(/-./g, char => char[1].toUpperCase());
  } catch (err) {
    throw new Error("Name property in package.json is missing.");
  }
};

const fileName: { es: string; iife: string } = {
  es: `${getPackageName()}.js`,
  iife: `${getPackageName()}.cjs`,
};

export default defineConfig({
  base: "./",
  build: {
    outDir: "./build/dist",
    lib: {
      entry: path.resolve(__dirname, "/build/package/index.js"),
      name: getPackageNameCamelCase(),
      formats: Object.keys(fileName) as LibraryFormats[],
      fileName: (format: ModuleFormat) => fileName[format as keyof typeof fileName] as string,
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./") }],
  }
});
