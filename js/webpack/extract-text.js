import ExtractTextPlugin from 'extract-text-webpack-plugin';

ExtractTextPlugin.loader = (options) => {
    return { loader: require.resolve("./catchable-loader"), options: options };
};

export default ExtractTextPlugin;
