const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const filename = (ext) => isDev ? `bundle.${ext}` : `bundle.[contenthash].${ext}`;

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/scripts', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: `./script/${filename('js')}`,
    assetModuleFilename: 'images/[name][ext][query]',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    historyApiFallback: true,
    open: true,
    port: 3000,
    compress: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: isProd,
      }
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
  devtool: isProd ? false : 'source-map',
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()],
  },
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
