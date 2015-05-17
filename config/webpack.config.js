var path = require('path');

module.exports = {
    entry: {
        'webpack-main': './src/client/scripts/webpack-main'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].webpack.js'
    },
    module: {
        loaders: [{
            test: /src\/.+.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    }
};
