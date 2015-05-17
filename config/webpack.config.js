var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/client/scripts/main',
        vendor: ['react', 'immutable']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].webpack.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ],
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
