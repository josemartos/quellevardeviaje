const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = require('./webpack.plugins');

const commonConfig = merge([
  {
    output: {
      filename: '[name].[chunkhash].js'
    },
    module: {
      rules: [
        {
          test: /\.(js|vue)$/,
          use: 'eslint-loader',
          enforce: 'pre'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: true }
            }
          ]
        },
        {
          test: /\.(css|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                // To avoid import in every vue component
                prependData: '@import "styles/base";'
              }
            }
          ]
        },
        {
          test: /\.svg$/,
          loader: 'vue-svg-loader',
          options: {
            svgo: {
              plugins: [{ removeDoctype: true }, { removeComments: true }]
            }
          }
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {}
            }
          ]
        }
      ]
    },
    resolve: {
      alias: {
        styles: path.resolve(__dirname, './styles'),
        assets: path.resolve(__dirname, './assets')
      }
    }
  },
  plugins.vueLoader(),
  plugins.generateHTML({
    template: 'index.html',
    filename: path.resolve(__dirname, 'dist/index.html')
  }),
  plugins.extractCSS({
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].css'
  }),
  plugins.copyAssets({
    from: path.join(__dirname, 'assets'),
    to: 'assets'
  }),
  plugins.copyAssets({
    from: path.join(__dirname, '.htaccess'),
    to: ''
  })
]);

const productionConfig = merge([
  plugins.cleanBuild(),
  plugins.optimizeCSS(),
  plugins.prerenderContent(path.join(__dirname, 'dist'))
]);

const developmentConfig = merge([{ devtool: 'cheap-module-source-map' }]);

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, developmentConfig);
};
