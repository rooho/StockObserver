const path = require('path')
const webpack = require('webpack')
const fg = require('fast-glob')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ChromeExtensionReloader = require('webpack-chrome-extension-reloader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')

const isDevMode = process.env.NODE_ENV === 'development'

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const config = {
  devtool: isDevMode ? 'eval-source-map' : false,
  context: path.resolve(__dirname, './src'),
  entry: {
    options: './options/index.js',
    popup: './popup/index.js',
    background: './background/index.js',
    contentScripts: './contentScripts/index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '.',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: !isDevMode,
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.scss$/,
        use: [
          isDevMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
      },
      {
        test: /\.sass$/,
        use: [
          isDevMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader?indentedSyntax',
        ],
      },
      {
        test: /\.styl$/,
        use: [
          isDevMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          isDevMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js',
      bulma$: 'bulma/css/bulma.css',
      '@': resolve('src'),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {from: 'assets', to: 'assets'},
      {from: 'manifest.json', to: 'manifest.json', flatten: true},
    ]),
    new HtmlWebpackPlugin({
      title: 'Options',
      template: './index.html',
      filename: 'options.html',
      chunks: ['options'],
    }),
    new HtmlWebpackPlugin({
      title: 'Popup',
      template: './index.html',
      filename: 'popup.html',
      chunks: ['popup'],
    }),
  ],
}

/**
 * Adjust rendererConfig for production settings
 */
if (isDevMode) {
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new ChromeExtensionReloader({
      entries: {
        background: 'background',
        options: 'options',
        popup: 'popup',
        contentScripts: 'contentScripts/index',
      },
    })
  )
} else {
  config.plugins.push(
    new ScriptExtHtmlWebpackPlugin({
      async: [/runtime/],
      defaultAttribute: 'defer',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new PurgecssPlugin({
      paths: fg.sync([`./src/**/*`], {
        onlyFiles: true,
        absolute: true,
      }),
    })
  )
}

module.exports = config
