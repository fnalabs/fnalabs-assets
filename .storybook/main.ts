import type { StorybookConfig } from 'storybook-react-rsbuild'

const config: StorybookConfig = {
  framework: 'storybook-react-rsbuild',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    "@storybook/addon-docs",
    '@storybook/addon-onboarding',
  ],
  managerHead: (head) => `${head}<meta name="robots" content="noindex" />`,
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // auto-generate select/radio controls from union type
      shouldExtractLiteralValuesFromEnum: true,
      // hide undefined type on optional props in storybook
      shouldRemoveUndefinedFromOptional: true,
    },
  },
  webpackAddons: [
    '@storybook/addon-coverage',
  ],
}
export default config
