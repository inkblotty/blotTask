
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/app.js'
  ],
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.s?css$/, loader: 'style!css!sass' },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        secure: false
      }
    }
  },
  devtool: 'eval-source-map',
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};