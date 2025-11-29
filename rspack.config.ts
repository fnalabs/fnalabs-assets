import { join } from 'path'
import rspack from '@rspack/core'
import refreshPlugin from '@rspack/plugin-react-refresh'
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack'
import federationConfig from './federationConfig'

const isDev = process.env.NODE_ENV === 'development'
const defaultConfig = {
  entry: { main: join(__dirname, './src/index.tsx') },
  resolve: { extensions: ['...', '.ts', '.tsx', '.jsx'] },
  // TODO: inject env variables here for dev and prod publicPath values
  output: {
    name: '[name].[contenthash].js',
    path: join(__dirname, './dist/assets'),
    publicPath: 'http://localhost:2999/assets/'
  },
  module: {
    rules: [
      { test: /\.svg$/, type: 'asset' },
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /(node_modules|\.webpack)/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              sourceMap: true,
              jsc: {
                externalHelpers: true,
                parser: { syntax: 'typescript', tsx: true },
                transform: { react: { runtime: 'automatic', development: isDev, refresh: isDev } },
              },
              env: { targets: ['chrome >= 87', 'edge >= 88', 'firefox >= 78', 'safari >= 14'] },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new rspack.ProgressPlugin({}),
    new rspack.HtmlRspackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: true,
      publicPath: '/assets',
    }),
    new ModuleFederationPlugin(federationConfig),
  ],
}

const config = () => {
  return isDev
    ? {
        ...defaultConfig,
        devServer: {
          port: 2999,
          static: { directory: join(__dirname, './dist/assets') },
          liveReload: true,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
          },
        },
        devtool: 'eval',
        plugins: [...defaultConfig.plugins, new rspack.HotModuleReplacementPlugin(), new refreshPlugin()],
        watch: true,
      }
    : {
        ...defaultConfig,
        output: { ...defaultConfig.output, filename: '[name].[contenthash].js' },
        devtool: 'source-map',
        optimization: { minimize: true },
      }
}
export default config
