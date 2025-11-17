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
    projectLinks: [
      { href: '/project-1', label: 'Project 1' },
      { href: '/project-2', label: 'Project 2' },
      { href: '/project-3', label: 'Project 3' },
    ],
    policyLinks: [
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms-of-service', label: 'Terms of Service' },
      { href: '/cookie-policy', label: 'Cookie Policy' },
    ],
  },
  decorators: [(Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  )],
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.projectLinks[0].label)).toBeVisible()
    await expect(canvas.getByText(args.projectLinks[1].label)).toBeVisible()
    await expect(canvas.getByText(args.projectLinks[2].label)).toBeVisible()
    await expect(canvas.getByText(args.policyLinks[0].label)).toBeVisible()
    await expect(canvas.getByText(args.policyLinks[1].label)).toBeVisible()
    await expect(canvas.getByText(args.policyLinks[2].label)).toBeVisible()
  },
}
