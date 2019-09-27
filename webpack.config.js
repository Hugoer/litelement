const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    devServer: {
        historyApiFallback: true
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: { ie: '11' } }]
                        ],
                        plugins: ['@babel/plugin-syntax-dynamic-import']
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [
        new CopyWebpackPlugin([
            'images/**',
            'node_modules/@webcomponents/webcomponentsjs/*.js',
            'manifest.json'
        ]),
        new HtmlWebpackPlugin({
            chunksSortMode: 'none',
            template: 'index.html'
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    }
};
