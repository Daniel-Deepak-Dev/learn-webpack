const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ['style-loader','css-loader']
            },
            {   test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" }
        ]
    },
    plugin:[
        new webpack.optimize.UglifyJsPlugin()
    ]
};