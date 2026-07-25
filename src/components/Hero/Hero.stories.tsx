import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'

import Hero from './Hero'

const meta = {
  title: 'Bulma/Layout/Hero',
  component: Hero,
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>
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
export const IsCenteredAndBold: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    bold: true,
    centered: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.children as string)).toBeVisible()
    await expect(canvas.getByText(args.children as string)).toHaveClass('has-text-centered')
    await expect(canvas.getByText(args.children as string).parentElement).toHaveClass('is-bold')
  },
}
export const HasColorAndSize: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    color: 'dark',
    size: 'medium',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.children as string)).toBeVisible()
    await expect(canvas.getByText(args.children as string).parentElement).toHaveClass('is-dark')
    await expect(canvas.getByText(args.children as string).parentElement).toHaveClass('is-medium')
  },
}
export const WithFooter: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    footer: 'Hero Footer',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.children as string)).toBeVisible()
    await expect(canvas.getByText(args.footer as string)).toBeVisible()
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
    await expect(canvas.getByText(args.children as string).parentElement).toHaveClass('test')
  },
}
export const WithNavbar: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    withNavbar: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.children as string)).toBeVisible()
    await expect(canvas.getByText(args.children as string).parentElement).toHaveClass('is-fullheight-with-navbar')
  },
}
