const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack.dev.config');

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  contentBase: config.output.contentBase,
  hot: true,
});

server.listen(3000, '0.0.0.0');
