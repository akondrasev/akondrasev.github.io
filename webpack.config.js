const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: ['./frontend/app.js'],
        vendor: ["./frontend/lib/vendor.js"]
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: [/frontend\/lib/, /node_modules/], loaders: ['ng-annotate-loader', 'babel-loader'] },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.(scss|sass)$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
            { test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader'] },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
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
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['$', 'jQuery', 'angular']
            }
        }),

        new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "vendor.bundle.js"}),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};