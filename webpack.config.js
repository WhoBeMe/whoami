const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '/client/index.ts'),

  output: {
    path: path.resolve(__dirname, './client/build'),
    filename: 'bundle.js',
  },

  plugins: [
    new HTMLWebpackPlugin({
      // filename: 'index.html',
      template: '/index.html',
    }),
  ],

  // devServer: {
  //   host: 'localhost',
  //   port: '8080',
  //   proxy: {
  //     '/api': 'http://localhost:3000',
  //   },
  //   historyApiFallback: true,
  //   static: {
  //     directory: path.resolve(__dirname, 'build'),
  //     publicPath: 'build',
  //   },
  // },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts','.tsx'],
  },
};
