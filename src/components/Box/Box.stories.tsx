import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'

import Box from './Box'

const meta = {
  title: 'Components/Box',
  component: Box,
  tags: ['autodocs'],
} satisfies Meta<typeof Box>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {
    children: <Box>example</Box>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('example')).toBeVisible()
  },
}
