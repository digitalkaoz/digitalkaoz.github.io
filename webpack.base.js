import webpack from 'webpack';

import path from 'path';
import ExtractTextPlugin from './js/webpack/extract-text';
//TODO re-add if https://github.com/webpack-contrib/extract-text-webpack-plugin/pull/390 resolved
//import ExtractTextPlugin from 'extract-text-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import HtmlWebpackPlugin from "html-webpack-plugin";
import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin';
import PreloadWebpackPlugin from 'preload-webpack-plugin';

const buildDir = path.resolve(__dirname, 'build');

export default {
    entry: {
        main: './js/index.jsx',
        vendor: ['react', 'react-dom', 'react-headroom', 'react-parallax', 'react-github-cards/dist/medium'/*, 'material-design-lite', 'devicon'*/]
    },
    output: {
        filename: '[name].[hash].js',
        library: 'digitalkaoz',
        path: buildDir
    },

    devtool: '#eval',
    target: 'web',

    devServer: {
        hot: false,
        stats: {
            modules: false,
            chunkModules: false,
            colors: true,
        },
        port: 7777,
        serverSideRender: true,
        inline: true,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname)

    },
    resolve: {
        alias: {
            'react': path.resolve(__dirname, 'node_modules/react'),
            'react-dom': path.resolve(__dirname, 'node_modules/react-dom')
        }
    },
    module: {
        rules: [
            // {
            //     test: /\.(ttf|eot|svg|woff)(\?[\-a-zA-Z0-9]*)?$/,
            //     use: "file-loader"
            // },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [/*'isomorphic-style-loader',*/ 'css-loader', 'sass-loader']
                })
            },
            {
                test: /.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }

                },
                exclude: /node_modules/
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: ['babel-loader',
                    {
                        loader: 'react-svg-loader',
                        options: {
                            es5: false,
                            jsx: true,
                            svgo: {
                                plugins: [
                                    {removeViewBox: false},
                                    {removeTitle: true},
                                    // {convertStyleToAttrs: true},
                                    {convertColors: true},
                                    {removeStyleElement: true},
                                     {cleanupAttrs: true},
                                     {removeUselessDefs: true},
                                    {removeEmptyAttrs: true},
                                    {removeHiddenElems: true},
                                     {cleanupEnableBackground: true},
                                     {removeUnknownsAndDefaults: true},
                                     {removeEmptyContainers: true},
                                     {removeUselessStrokeAndFill: true},
                                    //{transformsWithOnePath: true},
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
        new ExtractTextPlugin({filename: '[name].[hash].css', allChunks: true}),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: '[name].[hash].js' }),
        new ManifestPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './js/index.jsx',
            alwaysWriteToDisk: false,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            }
        }),
        new PreloadWebpackPlugin({
            rel: 'preload',
            as: 'script',
            include: 'all'
        }),
        new HtmlWebpackHarddiskPlugin(),
    ]
};
