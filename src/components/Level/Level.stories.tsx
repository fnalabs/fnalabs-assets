import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'

import Level from './Level'

const meta = {
  title: 'Bulma/Layout/Level',
  component: Level,
  tags: ['autodocs'],
} satisfies Meta<typeof Level>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {
    items: [{ content: 'test 1' }, { content: 'test 2' }],
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    const item1 = canvas.getByText(args.items[0].content)
    await expect(item1).toBeVisible()
    await expect(item1).toHaveClass('level-item')
    await expect(item1.tagName).toBe('DIV')

    await expect(item1.parentElement).toHaveClass('level')
    await expect(item1.parentElement?.tagName).toBe('DIV')

    const item2 = canvas.getByText(args.items[1].content)
    await expect(item2).toBeVisible()
    await expect(item2).toHaveClass('level-item')
    await expect(item2.tagName).toBe('DIV')
  },
}

export const WithGroups: Story = {
  args: {
    items: {
      left: [{ content: 'test 1' }, { content: 'test 2' }],
      right: [{ content: 'test 3' }, { content: 'test 4' }],
    },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    const leftItem1 = canvas.getByText(args.items.left[0].content)
    await expect(leftItem1).toBeVisible()
    await expect(leftItem1).toHaveClass('level-item')
    await expect(leftItem1.parentElement).toHaveClass('level-left')

    const leftItem2 = canvas.getByText(args.items.left[1].content)
    await expect(leftItem2).toBeVisible()
    await expect(leftItem2).toHaveClass('level-item')
    await expect(leftItem2.parentElement).toHaveClass('level-left')

    const rightItem1 = canvas.getByText(args.items.right[0].content)
    await expect(rightItem1).toBeVisible()
    await expect(rightItem1).toHaveClass('level-item')
    await expect(rightItem1.parentElement).toHaveClass('level-right')

    const rightItem2 = canvas.getByText(args.items.right[1].content)
    await expect(rightItem2).toBeVisible()
    await expect(rightItem2).toHaveClass('level-item')
    await expect(rightItem2.parentElement).toHaveClass('level-right')

    const leftItemGroup = leftItem1.parentElement
    await expect(leftItemGroup).toHaveClass('level-left')
    await expect(leftItemGroup?.tagName).toBe('DIV')
    await expect(leftItemGroup?.nextElementSibling).toHaveClass('level-right')
    await expect(leftItemGroup?.parentElement).toHaveClass('level')

    const rightItemGroup = rightItem1.parentElement
    await expect(rightItemGroup).toHaveClass('level-right')
    await expect(rightItemGroup?.tagName).toBe('DIV')
    await expect(rightItemGroup?.previousElementSibling).toHaveClass('level-left')
    await expect(rightItemGroup?.parentElement).toHaveClass('level')
  },
}

export const IsCentered: Story = {
  args: {
    items: [{ content: 'test 1', centered: true }],
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    const item = canvas.getByText(args.items[0].content)
    await expect(item).toBeVisible()
    await expect(item).toHaveClass('has-text-centered')
  },
}

export const IsNav: Story = {
  args: {
    items: [{ content: 'test 1' }],
    nav: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText(args.items[0].content)).toBeVisible()

    const nav = canvas.getByRole('navigation')
    await expect(nav).toBeVisible()
    await expect(nav).toHaveClass('level')
  },
}
