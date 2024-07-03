const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevMode = process.env.NODE_ENV !== 'production';

const PROXY = 'https://react-tutorials-2.ddev.site/';
const PUBLIC_PATH = '/themes/react_ecommerce_theme/js/dist_dev/';

const config = {
    entry: {
        main: [
            "./js/src/index.jsx",
            "./scss/style.scss"
        ]
    },
    devtool: (isDevMode) ? 'source-map' : false,
    mode: (isDevMode) ? 'development' : 'production',
    output: {
        path: isDevMode ? path.resolve(__dirname, "js/dist_dev") : path.resolve(__dirname, "js/dist"),
        filename: '[name].min.js',
        publicPath: PUBLIC_PATH
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.join(__dirname, 'js/src'),
                options: {
                    cacheDirectory: true,
                    plugins: [
                        isDevMode && require.resolve('react-refresh/babel')
                    ].filter(Boolean),
                },
            },
            {
                test: /\.scss$/,
                use: [
                    isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
        ],
    },
    plugins: [
        isDevMode && new ReactRefreshWebpackPlugin(),
        !isDevMode && new MiniCssExtractPlugin({
            filename: '../../css/style.min.css',
        }),
    ].filter(Boolean),
    devServer: {
        port: 8181,
        hot: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        devMiddleware: {
            writeToDisk: true,
        },
        proxy: [
            {
                index: '',
                context: ['/'],
                target: PROXY,
                publicPath: PUBLIC_PATH,
                secure: false,
                changeOrigin: true,
                xfwd: true
            }
        ]
    },
};

module.exports = config;