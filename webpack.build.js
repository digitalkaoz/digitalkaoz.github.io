import webpack from 'webpack';
import PurifyCssPlugin from 'purifycss-webpack-plugin';
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin'
import ResourceHintWebpackPlugin from 'resource-hints-webpack-plugin'

import baseConfig from './webpack.base';

export default {
    ...baseConfig,

    output : {
        ...baseConfig.output,
        libraryTarget: 'umd'
    },

    module: {
        rules: [
            ...baseConfig.module.rules.map((rule) => {
                if (rule.use === 'image-webpack-loader') {
                    return {
                        ...rule,
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
                    };
                }

                return rule;
            }),
        ],
    },

    plugins: [
        ...baseConfig.plugins,
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
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
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
            },
            output: {
                comments: false,
            }
        }),
        new StaticSiteGeneratorPlugin('main', ['/'], {}),
        new ResourceHintWebpackPlugin()
    ]
}