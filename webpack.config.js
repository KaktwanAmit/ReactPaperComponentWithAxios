var path = require('path');
var webpack = require('webpack');

var config = {
    entry: "./index.js",
    output: {
        path:'/',
        filename: 'bundle.js'
    },
    devServer:{
        inline:true,
        port:8090
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ["es2015", "react"]
                // plugins: ["transform-class-properties"]

            }
        }]
    }

};

module.exports = config;
