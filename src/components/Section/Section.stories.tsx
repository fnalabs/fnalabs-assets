import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'

import Section from './Section'

const meta = {
  title: 'Components/Section',
  component: Section,
  tags: ['autodocs'],
} satisfies Meta<typeof Section>
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
export const WithSizeMedium: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    size: 'medium',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.children as string)).toBeVisible()
  },
}
export const WithSizeLarge: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    size: 'large',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.children as string)).toBeVisible()
  },
}
