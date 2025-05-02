import * as pkg from './package.json' with { type: 'json' }

export default {
  name: pkg.name,
  manifest: true,
  exposes: {
    './Card': './src/components/Card/Card',
    './Container': './src/components/Container/Container',
    './Hero': './src/components/Hero/Hero',
    './Media': './src/components/Media/Media',
    './Tile': './src/components/Tile/Tile',
  },
  shared: {
    ...pkg.dependencies,
    react: { singleton: true, requiredVersion: pkg.dependencies['react'] },
    'react-dom': { singleton: true, requiredVersion: pkg.dependencies['react-dom'] },
    'react-router': { singleton: true, requiredVersion: pkg.dependencies['react-router'] },
  },
}
