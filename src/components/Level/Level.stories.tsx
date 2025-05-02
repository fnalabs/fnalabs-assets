import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'

import Level from './Level'

const meta = {
  title: 'Components/Level',
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

    await expect(canvas.getByText(args.items[0].content)).toBeVisible()
    await expect(canvas.getByText(args.items[1].content)).toBeVisible()
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

    await expect(canvas.getByText(args.items.left[0].content)).toBeVisible()
    await expect(canvas.getByText(args.items.left[1].content)).toBeVisible()
    await expect(canvas.getByText(args.items.right[0].content)).toBeVisible()
    await expect(canvas.getByText(args.items.right[1].content)).toBeVisible()
  },
}

export const IsCentered: Story = {
  args: {
    items: [{ content: 'test 1', centered: true }],
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText(args.items[0].content)).toBeVisible()
  },
}
