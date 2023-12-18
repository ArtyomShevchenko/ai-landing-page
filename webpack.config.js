const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// import html from "./file.html";

module.exports = {
    // development mode - show comment, a file is not compressed
    // mode: "development",

    // mode production - default mode, delete all comment, a file compressed
    mode: "production",
    entry: [path.resolve(__dirname, "src", "index.js"), path.resolve(__dirname, "public", "assets", "style", "default.css")],
    output: {
        // name generate from content hash, [name] - default: main
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        // assetModuleFilename: 'assets/images/[name][ext]'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", 'index.html') })
    ],

    devServer: {
        // static: {
        //     directory: path.join(__dirname, 'public'),
        // },
        compress: true,
        port: 9000,
        open: true,
        hot: true,
    },

    // збільшуе ліміт 244кб
    performance: {
        hints: false,
        maxEntrypointSize: 504000,
        maxAssetSize: 504000
    },

    // для роботи стилів css
    module: {
        rules: [
            { test: /\.css$/i, use: ["style-loader", "css-loader"] },
            { test: /\.(jpg|png)$/, use: { loader: 'url-loadxer' } },
            // // work <ing src>
            // { test: /\.html$/i, loader: "html-loader" },
        ]
    }
};