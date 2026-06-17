import type { StorybookConfig } from 'storybook-react-rsbuild'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    "@storybook/addon-docs",
    '@storybook/addon-onboarding',
  ],
  framework: {
    name: 'storybook-react-rsbuild',
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // faster build
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      // auto-generate select/radio controls from union type
      shouldExtractLiteralValuesFromEnum: true,
      // hide undefined type on optional props in storybook
      shouldRemoveUndefinedFromOptional: true,
    },
  },
  webpackAddons: [
    {
      name: '@storybook/addon-coverage',
      options: {
        istanbul: {
          exclude: [],
          include: ['src/**/*.stories.@(ts|tsx)'],
        },
      },
    },
  ],
}
export default config
