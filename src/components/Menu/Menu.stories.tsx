import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'
import { MemoryRouter } from 'react-router'

import Menu from './Menu'

const meta = {
  title: 'Components/Menu',
  component: Menu,
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {
    list: [
      {
        label: 'Label',
        list: [
          {
            label: 'Link 1',
            href: '#link1',
          },
          {
            label: 'Link 2',
            href: '#link2',
          },
        ],
      },
    ],
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.list[0].label)).toBeVisible()
    await expect(canvas.getByText(args.list[0].list[0].label)).toBeVisible()
    await expect(canvas.getByText(args.list[0].list[1].label)).toBeVisible()
  },
}
export const WithNested: Story = {
  args: {
    list: [
      {
        label: 'Label',
        list: [
          {
            label: 'Link 1',
            href: '#link1',
          },
          {
            label: 'Link 2',
            href: '#link2',
            list: [
              {
                label: 'Link 3',
                href: '#link3',
              },
              {
                label: 'Link 4',
                href: '#link4',
              },
            ],
          },
        ],
      },
    ],
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.list[0].label)).toBeVisible()
    await expect(canvas.getByText(args.list[0].list[0].label)).toBeVisible()
    await expect(canvas.getByText(args.list[0].list[1].label)).toBeVisible()
    // await expect(canvas.getByText(args.list[0].list[1].list[0].label)).toBeVisible()
    // await expect(canvas.getByText(args.list[0].list[1].list[1].label)).toBeVisible()
  },
}
