'use strict'
const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const process = require('process')

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    optimization: {
        usedExports: true,
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true, // Must be set to true if using source-maps in production
            }),
        ],
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                commons: {
                    chunks: 'all',
                    minChunks: 2,
                    maxInitialRequests: 5,
                    name: 'commons',
                    minSize: 0,
                },
                antd: {
                    name: 'antd',
                    test: (module) => {
                        return /@ant-design|antd/.test(module.context)
                    },
                    chunks: 'all',
                    priority: 10,
                },
                echarts: {
                    name: 'echarts',
                    test: (module) => {
                        return /echarts/.test(module.context)
                    },
                    chunks: 'all',
                    priority: 20,
                },
            },
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        // extract css into its own file
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.(less|css)\.*(?!.*map)/g, //注意不要写成 /\.css$/g
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true,
                },
                // 避免 cssnano 重新计算 z-index
                safe: true,
                // cssnano 集成了autoprefixer的功能
                // 会使用到autoprefixer进行无关前缀的清理
                // 关闭autoprefixer功能
                // 使用postcss的autoprefixer功能
                autoprefixer: false,
            },
            canPrint: true,
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency',
        }),
        // keep module.id stable when vendor modules does not change
        new webpack.HashedModuleIdsPlugin(),

        new webpack.ProvidePlugin({
            Promise: 'es6-promise-promise',
        }),

        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: resolve(__dirname, '../static'),
                to: 'static',
                ignore: ['.*'],
            },
        ]),
    ],
})

if (process.env.USE_BUNDLE_ANALYZ) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    webpackConfig.plugins.push(
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8889,
            reportFilename: 'report.html',
            defaultSizes: 'parsed',
            openAnalyzer: true,
            generateStatsFile: false,
            statsFilename: 'stats.json',
            statsOptions: null,
            logLevel: 'info',
        }),
    )
}

module.exports = webpackConfig
