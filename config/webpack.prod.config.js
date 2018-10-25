/**
 * PRODUCTION WEBPACK CONFIGURATION
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = require('./webpack.base.config')({
  mode: 'production',
  entry: [
    path.join(process.cwd(), 'app/src/index.jsx')
  ],

  output: {
    filename: 'js/bundle.[hash:7].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/public/index.html',
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
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:7].css',
      chunkFilename: 'css/[id].[hash:7].css',
    })
  ],
  devtool: 'source-map',
  performance: {
    assetFilter: (assetFilename) => !(/(\.map$)|(^(bundle\.|favicon\.))/.test(assetFilename))
  }
});
