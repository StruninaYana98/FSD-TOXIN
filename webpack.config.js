const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


const PATHS = {
    colorstype: path.join(__dirname,'/U Kit/Colors-&-Type'),
    formelements:path.join(__dirname,'/U Kit/Form-Elements'),
    headersfooters:path.join(__dirname,'/U Kit/Headers-&-Footers'),
    cards:path.join(__dirname,'/U Kit/Cards'),
    build: path.join(__dirname, '/bundles')
}

module.exports = {
    entry:{
        'colorstype': PATHS.colorstype + '/Colors-&-Type.js',
        'formelements': PATHS.formelements + '/Form-Elements.js',
        'headersfooters': PATHS.headersfooters + '/Headers-&-Footers.js',
        'cards':PATHS.cards + '/Cards.js'
    },
    output:{
        path: PATHS.build,
        filename: '[name].js'

    },


    plugins: [
        new webpack.ProvidePlugin({
           $: 'jquery',
           jQuery:'jquery',
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
            options: {pretty: true}
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
            test: /\.(woff(2)?|ttf|eot|svg|gif|jpg|png)$/,
            loader:'file-loader'
            }
        
        ]
    }

}

