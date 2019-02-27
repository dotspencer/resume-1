const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/docs"),
    filename: "bundle.js"
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
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.resolve("./public")
  }
};
