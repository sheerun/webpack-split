var SplitByPathPlugin = require('webpack-split-by-path');
var path = require('path');

module.exports = {
  entry: {
    index: './index.js'
  },
  output: {
    path: __dirname + '/public',
    filename: "[name]-[chunkhash].js",
    chunkFilename: "[name]-[chunkhash].js"
  },
  plugins: [
    new SplitByPathPlugin([
      {
        name: 'vendor',
        path: path.join(__dirname, 'node_modules')
      }
    ])
  ]
};
