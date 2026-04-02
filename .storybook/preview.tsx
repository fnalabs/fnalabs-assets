import { Preview } from 'storybook-react-rsbuild'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
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
