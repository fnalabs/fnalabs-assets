import * as pkg from './package.json' with { type: 'json' }

export default {
  name: pkg.name,
  manifest: true,
  exposes: {
    // Icons
    './icons/Efficiency': './src/components/Icon/Efficiency',
    './icons/Female': './src/components/Icon/Female',
    './icons/Flexibility': './src/components/Icon/Flexibility',
    './icons/HiveIO': './src/components/Icon/HiveIO',
    './icons/Male': './src/components/Icon/Male',
    './icons/Privacy': './src/components/Icon/Privacy',
    './icons/Quality': './src/components/Icon/Quality',
    './icons/Succinctness': './src/components/Icon/Succinctness',
    './icons/Support': './src/components/Icon/Support',

    // Bulma Components
    './Block': './src/components/Block/Block',
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
    './Image': './src/components/Image/Image',
    './Level': './src/components/Level/Level',
    './Media': './src/components/Media/Media',
    './Menu': './src/components/Menu/Menu',
    './Navbar': './src/components/Navbar/Navbar',
    './Notification': './src/components/Notification/Notification',
    './ProgressBar': './src/components/ProgressBar/ProgressBar',
    './Section': './src/components/Section/Section',

    // Custom Templates
    './AppLayout': './src/templates/AppLayout/AppLayout',
    './AsideLayout': './src/templates/AsideLayout/AsideLayout',
    './DirectionLayout': './src/templates/DirectionLayout/DirectionLayout',
    './GlobalLayout': './src/templates/GlobalLayout/GlobalLayout',
    './Loading': './src/templates/Loading/Loading'
  },
  shared: {
    ...pkg.dependencies,
    react: { singleton: true, requiredVersion: pkg.dependencies['react'] },
    'react-dom': { singleton: true, requiredVersion: pkg.dependencies['react-dom'] },
    'react-router': { singleton: true, requiredVersion: pkg.dependencies['react-router'] },
  },
}
