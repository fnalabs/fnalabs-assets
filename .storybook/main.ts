import type { StorybookConfig } from 'storybook-react-rsbuild'
import { dirname, join } from 'node:path'

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    getAbsolutePath("@storybook/addon-docs")
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
      name: getAbsolutePath('@storybook/addon-coverage'),
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
