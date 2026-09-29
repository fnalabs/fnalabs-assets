import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { MemoryRouter } from 'react-router'

import DirectionLayout from './DirectionLayout'

const meta = {
  title: 'Custom/Layouts/Navigation/DirectionLayout',
  component: DirectionLayout,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof DirectionLayout>
export default meta

type Story = StoryObj<typeof meta>
export const Defaults: Story = {
  args: {
    color: 'primary',
    links: {}
  }
}

export const WithLinks: Story = {
  args: {
    color: 'primary',
    links: {
      next: {
        label: 'Next',
        href: '/next',
      },
      prev: {
        label: 'Previous',
        href: '/prev',
      },
      up: {
        label: 'Up',
        href: '/up',
      },
    },
  },
}
