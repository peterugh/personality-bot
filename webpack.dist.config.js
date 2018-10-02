const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // build css files
const CopyWebpackPlugin = require('copy-webpack-plugin'); // copy images over
const ReplacePlugin = require('replace-webpack-plugin'); // replace CDN paths

module.exports = {
  entry: './app/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[local]___[hash:base64:5]'
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }),
        exclude: /node_modules/
      },
      {
        test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            {
              loader: 'css-loader',
              query: {
                localIdentName: '[local]'
              }
            }
          ]
        }),
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          },
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/main.css'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new CopyWebpackPlugin([
      { from: './app/index.html', to: 'index.html' },
      { from: './app/images', to: 'images' },
      { from: './app/fonts', to: 'fonts' },
    ])
  ]
};
