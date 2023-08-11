import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export default function buildPlugins({ paths, isDev, apiUrl }: BuildOptions):
  webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.assets, 'favicon.png'),
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
    }),
  ];

  if (isDev) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
    );
  }

  return plugins;
}
