const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


const PATHS = {
    colorstype: path.join(__dirname, '/U Kit/Colors-&-Type'),
    formelements: path.join(__dirname, '/U Kit/Form-Elements'),
    headersfooters: path.join(__dirname, '/U Kit/Headers-&-Footers'),
    cards: path.join(__dirname, '/U Kit/Cards'),
    landingpage: path.join(__dirname, '/pages/Landing-page'),
    build: path.join(__dirname, '/bundles')
}

module.exports = {
    entry: {
        'colorstype': PATHS.colorstype + '/Colors-&-Type.js',
        'formelements': PATHS.formelements + '/Form-Elements.js',
        'headersfooters': PATHS.headersfooters + '/Headers-&-Footers.js',
        'cards': PATHS.cards + '/Cards.js',
        'landingpage': PATHS.landingpage + '/Landing-page.js'
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'

    },
    devServer: {
        port: 4200,
        contentBase: PATHS.build,
        index: 'Landing-page.html'

    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            jquery: 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: PATHS.colorstype + '/Colors-&-Type.pug',
            filename: 'Colors-&-Type.html',
            chunks: ['colorstype']
        }),
        new HtmlWebpackPlugin({
            template: PATHS.formelements + '/Form-Elements.pug',
            filename: 'Form-Elements.html',
            chunks: ['formelements']
        }),
        new HtmlWebpackPlugin({
            template: PATHS.headersfooters + '/Headers-&-Footers.pug',
            filename: 'Headers-&-Footers.html',
            chunks: ['headersfooters']
        }),
        new HtmlWebpackPlugin({
            template: PATHS.cards + '/Cards.pug',
            filename: 'Cards.html',
            chunks: ['cards']
        }),
        new HtmlWebpackPlugin({
            template: PATHS.landingpage + '/Landing-page.pug',
            filename: 'Landing-page.html',
            chunks: ['landingpage']
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: { pretty: true }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                ]

            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts'
                }
            },
            {
                test: /\.(svg|gif|jpg|png)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'img'
                }
            }

        ]
    }

}

