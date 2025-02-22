const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/app.js',  // Application entry point
    output: {
      path: path.resolve(__dirname, 'public'),  // Output folder
      filename: 'main.js',  // Output js file
    },
    module: {
      rules: [
        {
          test: /\.js$/,  // Transpile js with babel
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.scss$/, 
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',  // In production, extract css to separate files for performance improvements
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin(),
        new OptimizeCSSAssetsPlugin(),
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),  // Clean the output directory before each build, for performance improvements
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      port: 9000,
      hot: true,
      open: true,
    },
    mode: isProduction ? 'production' : 'development',  // Use production or development mode depending on the environment
  };
};
