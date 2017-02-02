const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCssPlugin = require("purifycss-webpack-plugin");
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const buildDir = path.resolve(__dirname, 'build');

module.exports = {
    entry: {
        main : './js/index.jsx'
    },
    output: {
        filename: 'bundle.js',
        path: buildDir,
        library: 'digitalkaoz',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: {
                    loader: 'babel-loader',
                    query: {
                        minified: true,
                        compact: true,
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /react-github-cards\/src\/themes\/medium\/index\.js$/,
                loader: {
                    loader: 'babel-loader',
                    query: {
                        minified: true,
                        compact: true,
                        sourceMaps: false
                    }
                },
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [/*'isomorphic-style-loader',*/ 'css-loader', 'sass-loader']
                })
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                loaders: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        query: {
                            mozjpeg: {
                                progressive: true,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            optipng: {
                                optimizationLevel: 4,
                            },
                            pngquant: {
                                quality: '75-90',
                                speed: 3,
                            }
                        },
                    }
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
        new ExtractTextPlugin('[name].css'),
        new PurifyCssPlugin({
            basePath: __dirname,
            paths: [
                'js/**/*.jsx',
                'js/*.jsx',
            ],
            purifyOptions: {
                minify: true,
                info: false,
                rejected: false
            }
        }),
        new StaticSiteGeneratorPlugin('main', ['/'], {}),
        /*new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),*/
        new ManifestPlugin(),
        new ResourceHintWebpackPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
