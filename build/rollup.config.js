import json from "rollup-plugin-json"
import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
import filesize from "rollup-plugin-filesize"
import terser from '@rollup/plugin-terser';
import babel from "rollup-plugin-babel"

export default {
  input: "src/index.js",
  output: {
    file: "dist/swagger2har.js",
    name: "swagger2har",
    format: "umd"
  },
  plugins: [
    json(),
    filesize(),
    terser(),
    commonjs(),
    resolve({
      browser: true,
      main: true
    }),
    babel()
  ]
}
