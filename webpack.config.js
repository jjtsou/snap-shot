const path = require('path');

module.exports = {
  entry: { index: path.resolve(__dirname, 'src', 'app.jsx') },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    // extensions: ['*', '.js', '.jsx'],
    extensions: ['.js', '.jsx'],
  },
  stats: 'errors-only',
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: true,
    port: 9000,
  },
};
