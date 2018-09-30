const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PUBLIC_DIR = __dirname + '/../public';
const SRC_DIR = __dirname + '/../src';

module.exports = require('./webpack.base.config')({
    mode: 'production',
    entry: [
        SRC_DIR + '/index.jsx'
    ],
    plugins: [
        new HtmlWebpackPlugin({
            template: PUBLIC_DIR + '/index.html',
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
    devtool: 'source-map'
});
