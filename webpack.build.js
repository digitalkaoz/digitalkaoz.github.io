import webpack from 'webpack';
import PurifyCssPlugin from 'purifycss-webpack';
import baseConfig from './webpack.base';
import SWPrecacheWebpackPlugin from 'sw-precache-webpack-plugin';
import glob from 'glob';
import path from 'path';

export default {
    ...baseConfig,

    output : {
        ...baseConfig.output,
        libraryTarget: 'umd'
    },

    devtool: '#cheap-module-source-map',

    module: {
        rules: [
            ...baseConfig.module.rules.map((rule) => {
                if (rule.use === 'image-webpack-loader' || (Array.isArray(rule.use) && -1 !== rule.use.indexOf('image-webpack-loader'))) {
                    //inject image optimizations (disabled in dev for faster bundling
                    rule.use.splice(rule.use.indexOf('image-webpack-loader'), 1);

                    return {
                        ...rule,
                        use: [
                            ...rule.use,
                            {
                                loader: 'image-webpack-loader',
                                options: {
                                    mozjpeg: {
                                        quality: 75,
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
                                }
                            }
                        ]
                    }
                }

                return rule;
            }),
        ],
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        ...baseConfig.plugins.map((plugin) => {
            //enable writeToDisk for HtmlWebpackPlugin
            if (plugin.hasOwnProperty('options') && plugin.options.hasOwnProperty('alwaysWriteToDisk')) {
                plugin.options.alwaysWriteToDisk = true;
            }

            return plugin;
        }),
        new PurifyCssPlugin({
            styleExtensions: ['.scss', '.css'],
            paths: glob.sync(path.join(__dirname, '/js/**/*.jsx')),
            minimize: true,
            verbose: true,
            purifyOptions: {
                minify: true,
                info: false,
                rejected: false
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false,
                screw_ie8: true,
            },
            output: {
                comments: false,
            }
        }),
        new SWPrecacheWebpackPlugin(
            {
                cacheId: 'digitalkaoz.net',
                filename: 'service-worker.js',
                //maximumFileSizeToCacheInBytes: 4194304,
                minify: true,
                mergeStaticsConfig: true,
                staticFileGlobsIgnorePatterns: [/\.map$/]
            }
        ),
    ]
}
