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
    await expect(canvas.getByText('This text is within a block.')).toBeVisible()
  },
}

export const Article: Story = {
  args: {
    article: true,
    children: 'This text is within a block.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const box = canvas.getByText('This text is within a block.')
    await expect(box).toBeVisible()
  },
}
