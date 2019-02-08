const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    return {
        entry: {
            main: ['@babel/polyfill', './src/app.js']
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loaders: ['babel-loader']
                }
            ]
        },
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules']
        },
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist')
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
        ]
    };
}