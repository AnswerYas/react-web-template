'use strict'
const { resolve, join } = require('path')
const theme = require('../theme')
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin')
const process = require('process')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    context: resolve(__dirname, '../'),
    entry: {
        index: [resolve(__dirname, '../src')],
    },
    output: {
        path: resolve(__dirname, '../dist'),
        filename: isDev ? '[name].[hash].js' : '[name].[contenthash:8].js',
        publicPath: '/',
        chunkFilename: isDev ? '[name].[hash].js' : '[name].[contenthash:8].js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: ['node_modules', resolve(__dirname, '../src')],
        alias: {
            '@': join(__dirname, '../src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: '@svgr/webpack',
                        options: {
                            babel: false,
                            icon: true,
                        },
                    },
                ],
            },
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [require('autoprefixer')],
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            modifyVars: theme,
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                loader: 'babel-loader?cacheDirectory',
                exclude: /node_modules\/(?!react-intl|intl-messageformat|intl-messageformat-parser)/,
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000000,
                },
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000000,
                },
            },
           {
                test: /\.mp4$/,
                loader: 'url-loader?mimetype=video/mp4'
            }
        ],
    },
    plugins: [
        new DllReferencePlugin({
            manifest: require('../static/vendor.manifest.json'),
        }),
    ],
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
}
