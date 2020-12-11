const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, "../../build"),
    filename: "[name].[contenthash].js",
  },
  mode: "production",
  plugins: [new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })],
});
