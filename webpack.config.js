const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/styles.scss',
    output: {
        path: path.resolve(__dirname, './dist'),
        clean: true
    },
    mode: 'development',
    devServer: {
        hot: true,
        port: 7777
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]
}