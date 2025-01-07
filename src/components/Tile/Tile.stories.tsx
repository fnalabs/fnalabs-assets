import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'

import Tile from './Tile'

const meta = {
  title: 'Components/Tile',
  component: Tile,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'range',
        min: 1,
        max: 12,
        step: 1,
      },
    },
  },
} satisfies Meta<typeof Tile>
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
export const HasKind: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    kind: 'parent',
    size: 1,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.children as string)).toBeVisible()
  },
}
export const IsVerticalAndCentered: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    centered: true,
    centeredMobile: true,
    vertical: true,
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
export const WithCustomClass: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    className: 'test',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.children as string)).toBeVisible()
    // await expect(canvas.getByText(args.title as string)).toBeVisible()
  },
}
