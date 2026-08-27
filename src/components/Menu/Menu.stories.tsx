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

    const menuLabel = canvas.getByText('Label')
    await expect(menuLabel).toBeVisible()
    await expect(menuLabel).toHaveClass('menu-label')
    await expect(menuLabel.tagName).toBe('P')
    await expect(menuLabel.parentElement).toHaveClass('menu')
    await expect(menuLabel.parentElement?.tagName).toBe('NAV')

    const link1 = canvas.getByText('Link 1')
    await expect(link1).toBeVisible()
    await expect(link1.tagName).toBe('A')
    await expect(link1.parentElement?.tagName).toBe('LI')
    await expect(link1.parentElement?.parentElement).toHaveClass('menu-list')
    await expect(link1.parentElement?.parentElement?.tagName).toBe('UL')

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

    const link3 = canvas.getByText('Link 3')
    await expect(link3).toBeVisible()
    await expect(link3.parentElement?.tagName).toBe('LI')
    await expect(link3.parentElement?.parentElement).not.toHaveClass('menu-list')
    await expect(link3.parentElement?.parentElement?.tagName).toBe('UL')

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

    const link1 = canvas.getByText('Link 1') as HTMLAnchorElement
    await expect(link1).toBeVisible()
    await expect(link1.target).toBe('_blank')
    await expect(link1.rel).toBe('noopener noreferrer')
    await expect(link1.lastElementChild).toHaveClass('icon')
    await expect(link1.lastElementChild?.tagName).toBe('SPAN')
    await expect(link1.lastElementChild?.lastElementChild).toHaveClass('fa-solid')
    await expect(link1.lastElementChild?.lastElementChild).toHaveClass('fa-arrow-up-right-from-square')
  },
}
