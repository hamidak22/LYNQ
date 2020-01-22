var webpackConfig = require('./config/webpack.config.dev');

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        files: [
            'src/**/**/*.test.jsx',
        ],
        preprocessors: {
            'src/**/**/*.test.jsx': ['webpack', 'sourcemap'],
        },
        reporters: ['mocha', 'coverage'],
        client: {
            mocha: {
                timeout: '5000',
            },
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true,
        },
    });
};
