const { join } = require("path");

const BytenodePlugin = require("@sbrow/bytenode-webpack-plugin").default;

module.exports = [
  {
    mode: "production",
    target: "electron-renderer",
    entry: { index: join(__dirname, "src/index.js") },
    output: {
      path: join(__dirname, "app"),
      filename: "[name].js",
    },
    node: {
      __dirname: false,
    },
    plugins: [
      new BytenodePlugin({ entries: { index: "main" }, external: true }),
    ],
  },
  {
    mode: "production",
    target: "electron-renderer",
    entry: { electron: join(__dirname, "src/electron.js") },
    output: {
      path: join(__dirname, "app"),
      filename: "[name].js",
    },
    node: {
      __dirname: false,
    },
  },
];
