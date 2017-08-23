var config = require('./config'),
    paths = require('./utils/paths')('scripts'),
    webpack = require('webpack-stream'),
    ModernizrPlugin = require('modernizr-webpack-plugin');

module.exports = {
    webpack: {
        devtool: 'source-map',
        output: {
            filename: '[name].min.js',
            publicPath: paths.dest
        },
        plugins: [
            new ModernizrPlugin({
                filename: 'modernizr.js',
                htmlWebpackPlugin: false,
                minify: true,
                options: [
                    'setClasses',
                ],
                'feature-detects': config.tasks.scripts.featureDetects,
            })
        ],
    },
}
