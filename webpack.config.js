const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = env => {
    return ({
        mode: env.MODE,
        entry: './src/components/my-app.js',
        devtool: env.MODE === 'development' ? 'inline-source-map' : 'none',
        devServer: {
            contentBase: './build'
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(html)$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            attrs: false,
                        },
                    },
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'build')
        },
        plugins: [
            new CleanWebpackPlugin(),
            new CopyPlugin([
                {
                    from: 'node_modules/@webcomponents/webcomponentsjs',
                    to: 'webcomponentsjs'
                },
            ]),
            new HtmlWebpackPlugin({
                inject: 'head',
                template: 'index.html'
            })
        ]
    });
};
