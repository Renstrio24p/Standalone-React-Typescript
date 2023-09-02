const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.tsx', // Changed entry to .tsx
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'assets/[name].[contenthash].js', // Use contenthash for cache-busting
    clean: true,
  },
  target: 'web',
  devServer: {
    port: 4500,
    static: {
      directory: path.join(__dirname, 'src'),
    },
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Process .tsx files only
        exclude: /node_modules/,
        use: 'ts-loader', // Use ts-loader for TypeScript files
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[contenthash][ext]', // Output path for images
        },
      },
      {
        test: /\.(mp4|webm|ogg|ogv)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'videos/[name].[contenthash][ext]', // Output path for videos
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(), // Minimize CSS
      new TerserPlugin(), // Minimize JavaScript
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 2000, // Adjust this value as needed, e.g., 20000 bytes
      maxSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './', 'index.html'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/images',
          to: 'images',
          globOptions: {
            ignore: ['**/placeholder.png'], // Ignore specific files if needed
          },
        },
        {
          from: 'src/videos',
          to: 'videos',
          globOptions: {
            ignore: ['**/*.tmp'], // Ignore specific files if needed
          },
        },
      ],
    }),
  ],
};
