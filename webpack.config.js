const { join } = require("path");

const BytenodePlugin = require("@sbrow/bytenode-webpack-plugin").default;
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
      new HtmlWebpackPlugin({
        templateContent: `<script src="index.js"></script>`,
        inject: false,
      }),
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
