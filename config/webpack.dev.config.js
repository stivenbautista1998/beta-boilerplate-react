const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PUBLIC_DIR = __dirname + '/../public';
const SRC_DIR = __dirname + '/../src';

module.exports = require('./webpack.base.config')({
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client?noInfo=true&reload=true',
        SRC_DIR + '/index.jsx'
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: PUBLIC_DIR + '/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename:'css/[id].css',
        })
    ],
    devtool: 'eval-source-map'
});