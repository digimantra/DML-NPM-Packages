import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import path from "path";
import copy from "rollup-plugin-copy";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    external: ["react", "react-dom"],
    output: [
      {
        file: pkg.main,
        format: "cjs",
      },
      {
        file: pkg.module,
        format: "es",
      },
    ],
    plugins: [
      commonjs(),
      nodeResolve({ extensions: [".ts", ".tsx", ".js"] }),
      babel({ babelHelpers: "bundled", extensions: [".ts", ".tsx", ".js"] }),
      typescript(),
      image(),
      postcss({
        extract: path.resolve("dist/css/index.min.css"),
        minimize: true,
      }),
      copy({
        targets: [
          { src: "src/assets/css/fonts.min.css", dest: "dist/css/" },
          { src: "src/assets/fonts", dest: "dist/" },
        ],
      }),
      terser(),
    ],
  },
];
