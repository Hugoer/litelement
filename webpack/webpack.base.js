const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
console.debug('===============================');
console.debug(`isProd: ${isProd}`);
console.debug('===============================');

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'none' : 'inline-source-map',
  stats: isProd ? 'errors-only' : 'errors-warnings',
  bail: isProd ? true : undefined,
  entry: {
    polyfillsIe: [
      'core-js/features/promise',
      'whatwg-fetch',
      'core-js/stable',
      'ie11-custom-properties',
      'custom-event-polyfill',
      'regenerator-runtime/runtime'
    ],
    'webcomponents-loader': '@webcomponents/webcomponentsjs/webcomponents-bundle',
    app: [
      path.join(__dirname, '../', 'src', 'index.ts')
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          context: 'node_modules/@webcomponents/webcomponentsjs',
          from: '**/*.js',
          to: 'webcomponents'
        },
        'images/**',
        'src/fonts/**',
        'src/assets/**',
        'manifest.json',
        'src/theming/*.css',
        'readme.md'
      ]
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()],
      },
    }),
    new MiniCSSExtractPlugin({
      filename: "./css/styles.css",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../', 'src', 'index.html')
    }),
  ],
  optimization: {
    concatenateModules: isProd,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../', 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules[\\/](?!(canvg|ie11-custom-properties|regenerator-runtime|@webcomponents|lit-element|lit-html|@svgdotjs|pwa-helpers)[\\/]).*/
      },
      {
        test: /\.scss$/,
        loader: [
          MiniCSSExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(jpg|jpeg|bmp|png)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]',
            publicPath: '../'
          }
        }]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
            mimetype: 'application/font-woff',
            publicPath: '../'
          }
        }]
      }
    ]
  },
};
