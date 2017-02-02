import path from 'path';
import ExtractTextPlugin from './js/webpack/extract-text';
//TODO readd if https://github.com/webpack-contrib/extract-text-webpack-plugin/pull/390 resolved
//import ExtractTextPlugin from 'extract-text-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';

const buildDir = path.resolve(__dirname, 'build');

export default {
    entry: ['./js/index.jsx'],
    output: {
        filename: 'bundle.js',
        library: 'digitalkaoz',
        path: buildDir
    },

    devtool: 'eval',
    target: 'web',

    devServer: {
        hot: false,
        colors: true,
        stats: {
            modules: false,
            chunkModules: false,
            colors: true,
        },
        watch: true,
        port: 7777,
        inline: true,
        progress: true,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname)

    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [/*'isomorphic-style-loader',*/ 'css-loader', 'sass-loader']
                })
            },
            {
                test: /.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        cacheDirectory: true
                    }

                },
                exclude: /node_modules/
            },
            {
                test: /react-github-cards\/src\/themes\/medium\/index\.js$/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        cacheDirectory: true,
                    }

                },
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: [
                    'file-loader',
                    'image-webpack-loader',
                ]
            },
            {
                test: /\.svg$/,
                use: ['babel-loader',
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
        new ManifestPlugin(),
        new ExtractTextPlugin({filename: '[name].css', allChunks: true})
    ]
};
