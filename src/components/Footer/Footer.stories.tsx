import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'
import { MemoryRouter } from 'react-router'

import Footer from './Footer'

const meta = {
  title: 'Bulma/Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>
export default meta

type Story = StoryObj<typeof meta>
export const BasicFooter: Story = {
  args: {
    children: "Bulma Footer"
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    const footer = canvas.getByText(args.children as string)
    await expect(footer).toBeVisible()
    await expect(footer).toHaveClass('footer')
    await expect(footer.tagName).toBe('FOOTER')
  },
}
