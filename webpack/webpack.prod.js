const webpack = require('webpack');
const path = require('path');
const utils = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLess = new ExtractTextPlugin({
    filename: utils.assetsPath('css/[name].[hash:10].css')
});

module.exports = {
    entry: {
        main: './src/index.tsx'
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)(\?.*)?$/,
            use: ['babel-loader', 'ts-loader']
        }, {
            test: /\.less$/,
            use: extractLess.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loaders: 'url-loader',
            options: {
                limit: 1000,
                name: utils.assetsPath('images/[name].[hash:10].[ext]')
            }
        }]
    },
  	output: {
        filename: 'static/js/[name].[hash:10].js',
        path: path.resolve(__dirname, '../dist/'),
        publicPath: '/'
  	},
    plugins: [
        new webpack.DefinePlugin({
            'process.env': '"production"'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
              return (
                module.resource &&
                /\.js$/.test(module.resource) &&
                module.resource.indexOf(
                  path.join(__dirname, '../node_modules')
                ) === 0
              )
            }
        }),
        extractLess,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            minify: {
                collapseWhitespace: true
            },
            chunksSortMode: 'dependency'
        }),
        new webpack.ProgressPlugin(function handler(percentage, msg) {
            var line = "Processing " + msg + "\t" + Math.floor(percentage * 100) + "%";
            console.log(line);
        })
    ],
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts', '.css']
    }
};
