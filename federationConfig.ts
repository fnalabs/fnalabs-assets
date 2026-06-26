import * as pkg from './package.json' with { type: 'json' }

export default {
  name: pkg.name,
  manifest: true,
  exposes: {
    // Brand Icons
    './brands/FnALabs': './src/components/Icon/FnALabs',
    './brands/FnALabsInverted': './src/components/Icon/FnALabsInverted',
    './brands/HiveIO': './src/components/Icon/HiveIO',
    './brands/ModuleFederation': './src/components/Icon/ModuleFederation',
    './brands/OpenTelemetry': './src/components/Icon/OpenTelemetry',

    // Bulma Components
    './Block': './src/components/Block/Block',
    './Box': './src/components/Box/Box',
    './Button': './src/components/Button/Button',
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
    './AnalyticsLink': './src/templates/Analytics/AnalyticsLink',
    './AnalyticsToast': './src/templates/Analytics/AnalyticsToast',
    './Loading': './src/templates/Loading/Loading',
    './ServiceWorker': './src/templates/ServiceWorker/ServiceWorker',
    './SocialBrand': './src/templates/SocialBrand/SocialBrand',

    // Custom Layouts
    './AppLayout': './src/templates/AppLayout/AppLayout',
    './AsideLayout': './src/templates/AsideLayout/AsideLayout',
    './DirectionLayout': './src/templates/DirectionLayout/DirectionLayout',
    './GlobalLayout': './src/templates/GlobalLayout/GlobalLayout',

    // Contexts
    './ConsentContext': './src/contexts/ConsentContext',
  },
  shared: {
    ...pkg.dependencies,
    '@module-federation/enhanced': { singleton: true, requiredVersion: pkg.dependencies['@module-federation/enhanced'] },
    react: { singleton: true, requiredVersion: pkg.dependencies['react'] },
    'react-dom': { singleton: true, requiredVersion: pkg.dependencies['react-dom'] },
    'react-router': { singleton: true, requiredVersion: pkg.dependencies['react-router'] },
  },
}
