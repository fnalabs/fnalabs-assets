import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'

import Box from './Box'

const meta = {
  title: 'Bulma/Elements/Box',
  component: Box,
  tags: ['autodocs'],
} satisfies Meta<typeof Box>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {
    children: 'I\'m in a box.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const box = canvas.getByText('I\'m in a box.')
    await expect(box).toBeVisible()
    await expect(box).toHaveClass('box')
    await expect(box.tagName).toBe('DIV')
  },
}

export const FullHeight: Story = {
  args: {
    fullheight: true,
    children: 'I\'m in a box.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const box = canvas.getByText('I\'m in a box.')
    await expect(box).toBeVisible()
    await expect(box).toHaveClass('is-fullheight')
  },
}
