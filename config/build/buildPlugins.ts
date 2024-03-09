// @ts-ignore
import HtmlWebpackPlugin from 'html-webpack-plugin'
// @ts-ignore
import webpack from 'webpack'
import { type buildOptions } from './types/buildOptions'
// @ts-ignore
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
// @ts-ignore
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export default function buildPlugins ({ paths, isDev }: buildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    })
  ]

  if (isDev) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new ReactRefreshPlugin()
    )
  }
  return plugins
}
