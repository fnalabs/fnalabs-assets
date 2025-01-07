import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'

import Container from './Container'

const meta = {
  title: 'Components/Container',
  component: Container,
  tags: ['autodocs'],
} satisfies Meta<typeof Container>
export default meta

type Story = StoryObj<typeof meta>
export const ContentOnly: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.children as string)).toBeVisible()
  },
}
export const WithContentStyles: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    content: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.children as string)).toBeVisible()
  },
}
