// const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const SRC_DIR = __dirname + '/src';
const PUBLIC_DIR = __dirname + '/public';
const DIST_DIR = __dirname + '/dist';

const config = {
    entry: [
        SRC_DIR + '/index.jsx'
    ],
    output: {
        path: DIST_DIR,
        publicPath: '/',
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(scss|sass|css)$/,
                exclude: /node_modules/,
                loaders: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                            localIdentName: '[local]___[hash:base64:5]'
                        }
                    },
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(html)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'html-loader',
                    options: {minimize: true}
                }
            },
            {
                test: /\.(mp4|webm)$/,
                use: {
                    loader: 'url-loader',
                    options: {limit: 10000}
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: PUBLIC_DIR + '/index.html',
            filename: './index.html',
        })
    ],
    devServer: {
        contentBase: DIST_DIR,
        hot: true,
        port: 9000
    }
};

module.exports = function( env ) {
    var production = 'prod' === env;

    if(production) {
        console.log('💰💻 Mode of PRODUCTION 🚀🏆');

        config.plugins[2] = new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:7].css',
            chunkFilename: 'css/[id].[hash:7].css',
        });
        config.devtool = 'source-map';
    } else {
        console.log('🛠🎉 Mode of DEVELOPMENT 🎮🙌');
        
        config.plugins[2] = new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename:'css/[id].css',
        });
        config.devtool = 'eval-source-map';
    }
    return config;
};