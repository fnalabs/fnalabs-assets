import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'

import Block from './Block'

const meta = {
  title: 'Bulma/Elements/Block',
  component: Block,
  tags: ['autodocs'],
} satisfies Meta<typeof Block>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {
    children: 'This text is within a block.',
    content: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const block = canvas.getByText('This text is within a block.')
    await expect(block).toBeVisible()
    await expect(block).toHaveClass('block')
    await expect(block).toHaveClass('content')
    await expect(block.tagName).toBe('DIV')
  },
}

export const Article: Story = {
  args: {
    article: true,
    children: 'This text is within a block.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const block = canvas.getByText('This text is within a block.')
    await expect(block).toBeVisible()
    await expect(block).toHaveClass('block')
    await expect(block).not.toHaveClass('content')
    await expect(block.tagName).toBe('ARTICLE')
  },
}
