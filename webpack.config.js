const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const buildDir = path.resolve(__dirname, 'build');

module.exports = {
    entry: ["react-hot-loader/patch", './js/index.jsx'],
    output: {
        filename: 'bundle.js',
        path: buildDir
    },

    devtool: 'inline-source-map',

    devServer: {
        hot: false,
        colors: true,
        stats: { colors: true },
        //open: true,
        watch: true,
        port: 7777,
        inline: true,
        progress: true,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname)

    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: {
                    loader: 'babel-loader',
                    query: {
                        cacheDirectory: true
                    }

                },
                exclude: /node_modules/
            },
            {
                test: /react-github-cards\/src\/themes\/medium\/index\.js$/,
                loader: {
                    loader: 'babel-loader',
                    query: {
                        cacheDirectory: "./build",
                    }

                },
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: ['css-loader', 'sass-loader']
                })
            },
            {
                //test: /.*\.(gif|png|jpe?g|svg)$/i,
                test: /.*\.(gif|png|jpe?g)$/i,
                loaders: [
                    'url-loader',
                ]
            },
            {
                test: /\.svg$/,
                loaders: [ 'babel-loader',
                    {
                        loader: 'react-svg-loader',
                        query: {
                            es5: false,
                            jsx: true,
                            svgo: {
                                plugins: [
                                    {removeViewBox: false},
                                    {removeTitle: true},
                                    // {convertStyleToAttrs: true},
                                    {convertColors: true},
                                    {removeStyleElement: true},
                                    // {cleanupAttrs: true},
                                    // {removeUselessDefs: true},
                                     //{removeEmptyAttrs: true},
                                     //{removeHiddenElems: true},
                                     // {cleanupEnableBackground: true},
                                     // {removeUnknownsAndDefaults: true},
                                     // {removeEmptyContainers: true},
                                    // {removeUselessStrokeAndFill: true},
                                    //  {transformsWithOnePath: true},
                                ],
                                floatPrecision: 2
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('[name].css'),
    ]
};