const svelte = require("rollup-plugin-svelte");
const resolve = require("@rollup/plugin-node-resolve").default;
const commonjs = require("@rollup/plugin-commonjs");
const babel = require("@rollup/plugin-babel").babel;
const livereload = require("rollup-plugin-livereload");
const terser = require("rollup-plugin-terser").terser;
const css = require("rollup-plugin-css-only");
const typescript = require("@rollup/plugin-typescript");

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  input: "frontend-src/main.ts",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/bundle.js",
  },
  plugins: [
    svelte({
      compilerOptions: { dev: !production },
    }),
    css({ output: "bundle.css" }),
    typescript({
      tsconfig: "./tsconfig.json",
      sourceMap: !production,
    }),
    babel({
      extensions: [".js", ".mjs", ".svelte", ".ts"],
      babelHelpers: "runtime",
      include: ["src/**", "node_modules/svelte/**"],
    }),
    resolve({ browser: true, dedupe: ["svelte"] }),
    commonjs(),
    !production && livereload("public"),
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
