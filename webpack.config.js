const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/scripts', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './script/bundle.js',
    assetModuleFilename: 'images/[name][ext][query]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: './style/main.css',
    }),
    new CopyPlugin({
      patterns: [{
        from: "*.png",
        to: "images/",
        context: path.resolve(__dirname, 'src', 'assets', 'images', 'bg_card_front')
      }
      ],
    }),
    new CopyPlugin({
      patterns: [{
        from: "*.png",
        to: "images/",
        context: path.resolve(__dirname, 'src', 'assets', 'images')
      }
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.woff2?$/i,
        type: 'asset/resource',
        generator: {
          filename: './fonts/[name].[ext]',
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: `asset/resource`,
      },
    ],
  },
}
