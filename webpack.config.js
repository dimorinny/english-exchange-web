var path = require('path');
var webpack = require('webpack');

const basePlugins = [
    new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV !== 'production',
        __PRODUCTION__: process.env.NODE_ENV === 'production',
        __BASE__: JSON.stringify(process.env.BASE || 'http://localhost:3000'),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
];

const devPlugins = [
    new webpack.HotModuleReplacementPlugin()
];

const prodPlugins = [
    // TODO: add production plugins here
];

const plugins = basePlugins
    .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
    .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: plugins,
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot-loader/webpack', 'babel'],
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
