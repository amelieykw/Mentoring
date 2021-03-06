const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkerPlugin = require('worker-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './frontend/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/frontend'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'frontend/index.html',
    }),
    new WorkerPlugin({ globalObject: 'self' }),
    new Dotenv(),
  ],
};
