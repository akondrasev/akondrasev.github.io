const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // devtool: 'source-map',
    entry: {
        app: ['./frontend/main.js'],
        vendor: ['angular', 'angular-ui-router']
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loaders: ['ng-annotate-loader', 'babel-loader'] },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.(scss|sass)$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        publicPath: '',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './frontend/index.html',
            inject: 'body',
            hash: true
        }),
        new webpack.HotModuleReplacementPlugin(),

        new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "vendor.bundle.js"})
    ]
};