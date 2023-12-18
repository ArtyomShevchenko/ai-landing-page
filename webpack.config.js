const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "production",
    // mode: "production",
    // mode: "development",
    entry: [
        path.resolve("@babel/polyfill", __dirname, "src", "index.js"),
    ],
    output: {
        // навза для індекс.нтмл генеруєтся за допомогою HtmlWebpackPlugin
        filename: '[name].[contenthash].js',
        // сбірка в папку діст
        path: path.resolve(__dirname, 'dist'),
        // чистка непотрібних файлів
        clean: true,
        // шрифти, картинки ... додаются в папку асетс з генерацією
        assetModuleFilename: "assets/[name][ext]"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", 'index.html')
        }),
        // сбірка стилів в файл генерований хешем
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        })
    ],

    devServer: {
        // compress: true,
        port: 9000,
        open: true,
        // якщо стили багають - hot: true remove
        // hot: true,
    },

    // збільшуе ліміт 244кб
    performance: {
        hints: false,
        maxEntrypointSize: 504000,
        maxAssetSize: 504000
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader"
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: ["postcss-preset-env"],
                            },
                        },
                    }
                ],
            },
            // працює тількі при сборке в /dist, dev-server - не підтягує стилі
            // {
            //     test: /\.css$/i,
            //     use: [MiniCssExtractPlugin.loader, "css-loader"],
            // },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
        ]
    },
};