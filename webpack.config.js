const path = require("path");

module.exports = {
  mode: "development",
  //entry: ["@babel/polyfill", "./lib/components/index.js"],
  entry: "./lib/renders/dom.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }]
    //rules: [{ test: /\.js$/, use: "babel-loader" }]
  },
  resolve: {
    modules: [path.resolve("./lib"), path.resolve("./node_modules")]
  }
};
