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
        order: [
          'Getting Started',
          'Bulma',
          [
            'Elements',
            'Components',
            'Columns',
            'Grid',
            'Layout'
          ],
          'Custom',
          [
            'Elements',
            'Molecules',
            'Layouts',
            [
              'GlobalLayout',
              'AppLayout',
              'Navigation',
            ]
          ],
          'Context'
        ],
      },
    }
  },
  tags: ['autodocs'],
}

export default preview
