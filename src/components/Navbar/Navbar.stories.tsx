import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'
import { MemoryRouter } from 'react-router'

import Navbar from './Navbar'

const meta = {
  title: 'Bulma/Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>
export default meta

type Story = StoryObj<typeof meta>
export const BasicNavbar: Story = {
  args: {
    color: 'dark',
    brandLink: [{
      brandIcon: 'FnALabsInverted',
      href: 'https://fnalabs.com',
      label: 'Home',
    }],
    startLinks: [
      { href: '/', label: 'Home' },
      { href: '/documentation', label: 'Documentation' },
      { href: '/more', label: 'More', list: [
        { href: '/about', label: 'About' },
        { href: '/jobs', label: 'Jobs' },
        { href: '/contact', label: 'Contact', divider: true },
        { href: '/report-issue', label: 'Report an issue' },
      ]},
    ],
    endLinks: [
      { href: '/signup', label: 'Sign Up', button: true, color: 'primary' },
      { href: '/login', label: 'Login', button: true, color: 'light' },
    ],
  },
  decorators: [Story => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  )],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Home')).toBeVisible()
  },
}
