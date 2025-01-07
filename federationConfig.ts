import * as pkg from './package.json' with { type: 'json' }

export default {
  name: pkg.name,
  filename: 'mf-manifest.json',
  manifest: true,
  exposes: {},
  shared: {
    ...pkg.dependencies,
    react: {
      singleton: true,
      requiredVersion: pkg.dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: pkg.dependencies['react-dom'],
    },
    'react-router-dom': {
      singleton: true,
      requiredVersion: pkg.dependencies['react-router-dom'],
    },
  },
}
