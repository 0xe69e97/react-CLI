const path = require('path')
const webpack = require('webpack')
console.log(path.join(__dirname, 'public/'))
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 9991,
    compress: true,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true,
    allowedHosts: [
      // 'https://admediatest.58v5.cn/',
      'admediatest.58v5.cn',
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
}
