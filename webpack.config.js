const webpack = require('webpack');
const path = require('path');

const dist = 'dist/';

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000/',
    'webpack/hot/dev-server',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, dist),
    publicPath: dist,
    contentBase: dist,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s(a|c)ss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  sassLoader: {
    includePaths: [
      path.resolve('./node_modules/bulma/'),
    ],
  },
};
