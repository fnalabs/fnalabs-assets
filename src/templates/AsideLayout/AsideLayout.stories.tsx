import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { MemoryRouter } from 'react-router'

import AsideLayout from './AsideLayout'

const meta = {
  title: 'Custom/Layouts/Navigation/AsideLayout',
  component: AsideLayout,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof AsideLayout>
export default meta

type Story = StoryObj<typeof meta>
export const Defaults: Story = {
  args: {
    list: [
      {
        label: 'Label',
        list: [
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Link 2',
            href: '/link2',
            list: [
              {
                label: 'Link 3',
                href: '/link3',
              },
              {
                label: 'Link 4',
                href: '/link4',
                external: true,
              },
            ],
          },
        ],
      },
    ],
  },
}
