const webpack = require('webpack');
const path = require('path');
const utils = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const commonEntry = 'webpack-hot-middleware/client?path=http://localhost:8086/__webpack_hmr&reload=true';

module.exports = {
    entry: {
        main: [commonEntry, './src/index.tsx']
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)(\?.*)?$/,
            loaders: ['babel-loader', 'ts-loader']
        }, {
            test: /\.less$/,
            loaders: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loaders: 'url-loader',
            options: {
                limit: 1000,
                name: utils.assetsPath('images/[name].[hash:7].[ext]')
            }
        }]
    },
  	output: {
        filename: '[name].[hash:10].js',
        path: path.resolve(__dirname, '../dist/'),
        publicPath: '/'
  	},
    devtool: 'sourcemap',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ],
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts', '.css']
    }
};
