const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/'),
    // path: path.resolve(__dirname, 'dist/[name]]'),
    // publicPath: 'http://cdn.example.com/assets/[name]/'
  }
};