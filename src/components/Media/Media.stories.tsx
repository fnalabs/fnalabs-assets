import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'

import Media from './Media'

const meta = {
  title: 'Components/Media',
  component: Media,
  tags: ['autodocs'],
} satisfies Meta<typeof Media>
export default meta

type Story = StoryObj<typeof meta>
export const ContentOnly: Story = {
  args: {
    imgAlt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    imgSrc: 'https://fnalabs.github.io/fnalabs-assets/assets/fnalabs/adam.96x96.png',
    subtitle: 'Subtitle',
    title: 'Title',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    // await expect(canvas.getByText(args.imgAlt as string)).toBeVisible()
    // await expect(canvas.getByText(args.imgSrc as string)).toBeVisible()
    await expect(canvas.getByText(args.subtitle as string)).toBeVisible()
    await expect(canvas.getByText(args.title as string)).toBeVisible()
  },
}
