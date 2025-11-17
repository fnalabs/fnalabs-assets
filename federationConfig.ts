import * as pkg from './package.json' with { type: 'json' }

export default {
  name: pkg.name,
  manifest: true,
  exposes: {
    // Bulma Components
    './Box': './src/components/Box/Box',
    './Card': './src/components/Card/Card',
    './Cell': './src/components/Grid/Cell',
    './Column': './src/components/Columns/Column',
    './Columns': './src/components/Columns/Columns',
    './Container': './src/components/Container/Container',
    './Footer': './src/components/Footer/Footer',
    './Grid': './src/components/Grid/Grid',
    './Hero': './src/components/Hero/Hero',
    './Icon': './src/components/Icon/Icon',
    './Level': './src/components/Level/Level',
    './Media': './src/components/Media/Media',
    './Menu': './src/components/Menu/Menu',
    './Navbar': './src/components/Navbar/Navbar',
    './Section': './src/components/Section/Section',


    './AppLayout': './src/templates/AppLayout/AppLayout',
    './GlobalLayout': './src/templates/GlobalLayout/GlobalLayout',
  },
  shared: {
    ...pkg.dependencies,
    react: { singleton: true, requiredVersion: pkg.dependencies['react'] },
    'react-dom': { singleton: true, requiredVersion: pkg.dependencies['react-dom'] },
    'react-router': { singleton: true, requiredVersion: pkg.dependencies['react-router'] },
  },
}
