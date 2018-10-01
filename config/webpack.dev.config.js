const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = require('./webpack.base.config')({
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client?noInfo=true&reload=true',
        path.join(process.cwd(), 'src/index.jsx')
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename:'css/[id].css',
        })
    ],
    devtool: 'eval-source-map',
    performance: {
        hints: false
    }
});