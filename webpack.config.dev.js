const merge = require('webpack-merge');
const WorkerPlugin = require('worker-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'dist/frontend',
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new WorkerPlugin(), new Dotenv()],
});
