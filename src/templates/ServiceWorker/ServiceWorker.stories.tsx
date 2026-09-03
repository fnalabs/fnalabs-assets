import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { MemoryRouter } from 'react-router'

import ServiceWorker from './ServiceWorker'

const meta = {
  title: 'Custom/Molecules/ServiceWorker',
  component: ServiceWorker,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof ServiceWorker>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {
    src: 'test',
    scope: '/'
  },
}
