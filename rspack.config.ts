import { join } from 'path'
import {
  DefinePlugin,
  HotModuleReplacementPlugin,
  HtmlRspackPlugin,
  ProgressPlugin,
} from '@rspack/core'
import refreshPlugin from '@rspack/plugin-react-refresh'
import { InjectManifest } from '@aaroon/workbox-rspack-plugin'
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack'
import federationConfig from './federationConfig'

const ROUTE = process.env.ROUTE ?? '/assets';
const HOST = process.env.HOST ?? 'http://localhost:2999';

const NODE_ENV = process.env.NODE_ENV || 'production';
const IS_DEV = NODE_ENV === 'development'

const defaultConfig = {
  entry: { main: join(__dirname, './src/index.tsx') },
  resolve: { extensions: ['...', '.ts', '.tsx', '.jsx'] },
  output: {
    name: '[name].[contenthash].js',
    path: join(__dirname, `./dist${ROUTE}`),
    publicPath: `${HOST}${ROUTE}/`,
    clean: true
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
                transform: { react: { runtime: 'automatic', development: IS_DEV, refresh: IS_DEV } },
              },
              env: { targets: ['chrome >= 87', 'edge >= 88', 'firefox >= 78', 'safari >= 14'] },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ProgressPlugin({}),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      'process.env.ROUTE': JSON.stringify(ROUTE),
      'process.env.HOST': JSON.stringify(HOST),
    }),
    new HtmlRspackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: true,
      publicPath: ROUTE,
    }),
    new ModuleFederationPlugin(federationConfig),
  ],
}

const config = () => {
  return IS_DEV
    ? {
        ...defaultConfig,
        devServer: {
          port: 2999,
          static: { directory: join(__dirname, `./dist${ROUTE}`) },
          liveReload: true,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
          },
        },
        devtool: 'eval',
        plugins: [
          ...defaultConfig.plugins,
          new HotModuleReplacementPlugin(),
          new refreshPlugin(),
        ],
        watch: true,
      }
    : {
        ...defaultConfig,
        output: { ...defaultConfig.output, path: join(__dirname, `./docs${ROUTE}`) },
        devtool: 'source-map',
        optimization: { minimize: true },
        plugins: [
          ...defaultConfig.plugins,
          new InjectManifest({
            dontCacheBustURLsMatching: /\.\w{8}\./,
            manifestTransforms: [
              async manifest => {
                const newManifest = manifest.map(entry => ({
                  ...entry,
                  url: entry.url,
                }));
                return { manifest: newManifest };
              }
            ],
            swDest: 'sw.js',
            swSrc: join(__dirname, './src/Worker.ts'),
          }),
        ],
      }
}
export default config
