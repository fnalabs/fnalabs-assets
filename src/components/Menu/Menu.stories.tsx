import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'
import { MemoryRouter } from 'react-router'

import Menu from './Menu'

const meta = {
  title: 'Bulma/Components/Menu',
  component: Menu,
  decorators: [Story => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  )],
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Label')).toBeVisible()
    await expect(canvas.getByText('Link 1')).toBeVisible()
    await expect(canvas.getByText('Link 2')).toBeVisible()
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Label')).toBeVisible()
    await expect(canvas.getByText('Link 1')).toBeVisible()
    await expect(canvas.getByText('Link 2')).toBeVisible()
    await expect(canvas.getByText('Link 3')).toBeVisible()
    await expect(canvas.getByText('Link 4')).toBeVisible()
  },
}
export const WithExternal: Story = {
  args: {
    list: [
      {
        label: 'Label',
        list: [
          {
            label: 'Link 1',
            href: '#link1',
            external: true,
          },
        ],
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Label')).toBeVisible()
    await expect(canvas.getByText('Link 1')).toBeVisible()
  },
}
