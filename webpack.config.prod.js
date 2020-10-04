var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
// var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
  entry: [__dirname + "/src/index.js"],
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
    publicPath: "./",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        exclude: [/\.html$/, /\.(js|jsx)$/, /\.css$/, /\.json$/],
        loader: "file-loader",
        options: {
          name: "static/media/[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: __dirname + "/public/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new ManifestPlugin({
      fileName: "asset-manifest.json",
    }),
  ],
  optimization: {
    minimize: true, //Update this to true or false
  },
};
