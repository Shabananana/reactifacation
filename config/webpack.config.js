var path = require('path');

module.exports = {
    entry: {
        'main': './src/client/scripts/main'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].webpack.js'
    },
    watch: {

    },
    module: {
        loaders: [{
            test: /src\/.+.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    }
};
