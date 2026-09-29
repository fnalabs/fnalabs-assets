import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'

import Section from './Section'

const meta = {
  title: 'Bulma/Layout/Section',
  component: Section,
  tags: ['autodocs'],
} satisfies Meta<typeof Section>
export default meta

type Story = StoryObj<typeof meta>
export const ContentOnly: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    content: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    const section = canvas.getByText(args.children as string)
    await expect(section).toBeVisible()
    await expect(section).toHaveClass('section')
    await expect(section).toHaveClass('content')
    await expect(section.tagName).toBe('SECTION')
  },
}

export const WithSizeMedium: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    size: 'medium',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.children as string)).toHaveClass('is-medium')
  },
}

export const WithSizeLarge: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    size: 'large',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.children as string)).toHaveClass('is-large')
  },
}

export const AsArticle: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    article: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    const section = canvas.getByText(args.children as string)
    await expect(section).toBeVisible()
    await expect(section).toHaveClass('section')
    await expect(section.tagName).toBe('ARTICLE')
  },
}
