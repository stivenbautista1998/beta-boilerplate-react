// const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const prodMode = process.env.NODE_ENV !== 'production';
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
        filename: 'bundle.js'
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
                test: /\.(eot|ico|svg|otf|ttf|woff|woff2)$/,
                use: 'file-loader',
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      query: {
                        gifsicle: {
                          interlaced: true
                        },
                        mozjpeg: {
                          progressive: true
                        },
                        optipng: {
                          optimizationLevel: 7
                        },
                        pngquant: {
                          quality: '65-90',
                          speed: 4
                        }
                      }
                    },
                  },
                ],
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
        }),
        new MiniCssExtractPlugin({
            filename: prodMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: prodMode ? '[id].css' : '[id].[hash].css',
        })
    ],
    devServer: {
        contentBase: DIST_DIR,
        hot: true,
        port: 9000
    }
};

module.exports = function() {
    if(prodMode) {
        console.log('Mode of PRODUCTION');
        config.devtool = 'source-map';
    } else {
        console.log('Mode of DEVELOPMENT');
        config.devtool = 'eval-source-map';
    }
    return config;
};