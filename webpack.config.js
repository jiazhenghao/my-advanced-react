const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
// const webpack = require("webpack"); //to access built-in plugins

module.exports = {
  mode: "development",
  //entry: ["@babel/polyfill", "./lib/components/index.js"],
  entry: "./lib/components/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }]
    //rules: [{ test: /\.js$/, use: "babel-loader" }]
  }
  //plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })]
};
