const merge = require('webpack-merge');
const webpack = require('webpack');

const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'dist/frontend',
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
