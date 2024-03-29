const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const path = require('path');
const webpack = require('webpack');

const basePlugins = [
    new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV !== 'production',
        __PRODUCTION__: process.env.NODE_ENV === 'production',
        __BASE__: JSON.stringify(process.env.BASE || 'http://localhost:3000'),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        favicon: 'favicon.ico'
    })
];

const baseEntry = [
    './src/index'
];

const baseBabelLoaders = [
    'babel'
];

const devPlugins = [
    new webpack.HotModuleReplacementPlugin()
];

const devEntries = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server'
];

const devBabelLoaders = [
    'react-hot-loader/webpack'
];

const prodPlugins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        children: true,
        async: true
    }),
    new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
    }),
    new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        comments: false,
        compress: {
            sequences: true,
            booleans: true,
            loops: true,
            unused: true,
            warnings: false,
            drop_console: true,
            unsafe: true
        }
    })
];

const babelLoaders = baseBabelLoaders
    .concat(process.env.NODE_ENV === 'development' ? devBabelLoaders : []);

const plugins = basePlugins
    .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
    .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);

const entries = baseEntry
    .concat(process.env.NODE_ENV === 'development' ? devEntries : []);

module.exports = {
    entry: entries,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: plugins,
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: babelLoaders,
            exclude: '/node_modules/',
            include: path.join(__dirname, 'src')
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader', 'postcss-loader'],
            exclude: '/node_modules/',
            include: path.join(__dirname, 'src')
        }]
    }
};
