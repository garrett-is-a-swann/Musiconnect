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
                },
                {
                    test: /\.png$/,
                    loader: 'file-loader'
                }
            ]
        },
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules']
        },
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000,
            historyApiFallback: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: env && env.appTitle? env.appTitle: 'Undefined Title',
                template: './src/index.html',
                favicon: './src/favicon.ico'
            }),
        ]
    };
}