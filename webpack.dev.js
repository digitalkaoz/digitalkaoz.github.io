import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import baseConfig from "./webpack.base";
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    ...baseConfig,

    devtool: 'inline-source-map',

    module: {
        rules: [
            ...baseConfig.module.rules.map((rule) => {
                if (typeof rule.use === 'string' && rule.use.indexOf('extract-text-webpack-plugin') !== false) {
                    return {
                        test: /\.scss$/,

                        oneOf: [
                            {test: /html-webpack-plugin/, use: "null-loader"},
                            {
                                use: ExtractTextPlugin.extract({
                                    fallbackLoader: 'style-loader',
                                    loader: ['css-loader', 'sass-loader']
                                })
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
                NODE_ENV: JSON.stringify('development'),
            },
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './js/index.jsx',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            }
        }),
        ...baseConfig.plugins
    ]
}