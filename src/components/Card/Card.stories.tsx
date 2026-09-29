import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'

import Card from './Card'

const meta = {
  title: 'Bulma/Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>
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
export const WithHeader: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    header: 'Card Header',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.children as string)).toBeVisible()
    await expect(canvas.getByText(args.header as string)).toBeVisible()
  },
}
export const WithFooter: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    footer: 'Card Footer',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.children as string)).toBeVisible()
    await expect(canvas.getByText(args.footer as string)).toBeVisible()
  },
}
export const WithImage: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    image: 'Card Image',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.children as string)).toBeVisible()
    await expect(canvas.getByText(args.image as string)).toBeVisible()
  },
}
