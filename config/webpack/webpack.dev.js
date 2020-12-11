const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, "../../dist"),
    filename: "[name].[contenthash].js",
  },
  mode: "development",
  devtool: "inline-source-map",
  stats: "minimal",
  devServer: {
    contentBase: "./dist",
    host: "localhost",
    port: "4000",
    inline: true,
    compress: true,
    open: true,
    openPage: "",
    stats: "minimal",
    historyApiFallback: true,
  },
});
