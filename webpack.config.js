const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/docs"),
    filename: "index-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.svg(\?.*)?$/,
        issuer: /\.js$/,
        loader: "svg-inline-loader"
      },
      {
        test: /\.svg/,
        issuer: /\.scss$/,
        use: {
          loader: "svg-url-loader",
          options: {}
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
