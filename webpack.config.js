const path = require("path");

module.exports = {
  mode: "development",
  //entry: ["@babel/polyfill", "./lib/components/index.js"],
  //entry: "./lib/renders/dom.js",
  entry: {
    // vendor: [
    //   "react",
    //   "react-dom",
    //   "prop-types",
    //   "axios",
    //   "lodash",
    //   "core-js",
    //   "regenerator-runtime"
    // ],
    app: ["./lib/renders/dom.js"]
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      automaticNameMaxLength: 30,
      name: true,
      cacheGroups: {
        vendor: {
          // test: /[\\/]node_modules[\\/]/,
          // priority: -10
          test: /[\\/]node_modules[\\/](react|react-dom|prop-types|axios|lodash|core-js|regenerator-runtime)[\\/]/,
          name: "vendor",
          chunks: "all"
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"]
          }
        }
      }
    ]
  },
  resolve: {
    modules: [path.resolve("./lib"), path.resolve("./node_modules")]
  }
};
