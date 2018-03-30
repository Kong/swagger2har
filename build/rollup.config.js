import json from "rollup-plugin-json"
import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
import filesize from "rollup-plugin-filesize"
import uglify from "rollup-plugin-uglify"

export default {
  input: "index.js",
  output: {
    file: "dist/swagger2har.js",
    name: "swagger2har",
    format: "umd",
    exports: "named"
  },
  plugins: [
    json(),
    filesize(),
    uglify(),
    commonjs(),
    resolve({
      browser: true,
      main: true,
      preferBuiltins: true
    })
  ]
}
