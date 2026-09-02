import { Preview } from 'storybook-react-rsbuild'
import { sb } from 'storybook/test'
import { themes } from 'storybook/theming'

sb.mock(import('react-ga4'))

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
    options: {
      storySort: {
        order: ['Getting Started', 'Templates', 'Bulma', ['Elements', 'Components', 'Columns', 'Grid', 'Layout']],
      },
    }
  },
  tags: ['autodocs'],
}

export default preview
