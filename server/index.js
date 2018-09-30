const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackDevConfig = require('../config/webpack.dev.config');
const app = require("express")();

const compiler = webpack(webpackDevConfig);

app.use(webpackDevMiddleware(compiler, {
    publicPath: '/',
    quiet: true
}));

app.use(webpackHotMiddleware(compiler));

app.listen(3000, function() {
    console.log("Listeningort 3000!");
});