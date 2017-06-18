module.exports = function (config) {
    config.set({
        // base path used to resolve all patterns
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai', 'jasmine'],

        // list of files/patterns to load in the browser
        files: [{ pattern: 'spec.bundle.js', watched: false }],

        // files to exclude
        exclude: [],

        plugins: [
            require("karma-chai"),
            require('karma-mocha'),
            require('karma-jasmine'),
            require("karma-chrome-launcher"),
            require("karma-sourcemap-loader"),
            require("karma-webpack"),
            require("karma-coverage")
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: { 'spec.bundle.js': ['webpack', 'sourcemap', 'coverage'] },

        webpack: {
            devtool: 'inline-source-map',
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
            }
        },

        webpackServer: {
            noInfo: true // prevent console spamming when running in Karma!
        },

        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        // web server port
        port: 9876,

        // enable colors in the output
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // toggle whether to watch files and rerun tests upon incurring changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // if true, Karma runs tests once and exits
        singleRun: false
    });
};