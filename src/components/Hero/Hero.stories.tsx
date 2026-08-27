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

    const heroBody = canvas.getByText(args.children as string)
    await expect(heroBody).toBeVisible()
    await expect(heroBody).toHaveClass('hero-body')
    await expect(heroBody.tagName).toBe('DIV')
    await expect(heroBody.parentElement).toHaveClass('hero')
    await expect(heroBody.parentElement?.tagName).toBe('SECTION')
  },
}
export const IsCenteredAndBold: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    bold: true,
    centered: true,
    color: 'primary',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    const heroBody = canvas.getByText(args.children as string)
    await expect(heroBody).toBeVisible()
    await expect(heroBody).toHaveClass('has-text-centered')
    await expect(heroBody.parentElement).toHaveClass('is-bold')
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

    const heroBody = canvas.getByText(args.children as string)
    await expect(heroBody).toBeVisible()
    await expect(heroBody.parentElement).toHaveClass('is-dark')
    await expect(heroBody.parentElement).toHaveClass('is-medium')
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

    const heroFooter = canvas.getByText(args.footer as string)
    await expect(heroFooter).toBeVisible()
    await expect(heroFooter).toHaveClass('hero-foot')
    await expect(heroFooter.tagName).toBe('DIV')
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
