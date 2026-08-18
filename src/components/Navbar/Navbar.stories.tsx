import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'
import { MemoryRouter } from 'react-router'

import Navbar, { INavbar } from './Navbar'

const meta = {
  title: 'Bulma/Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  decorators: [Story => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  )],
} satisfies Meta<typeof Navbar>
export default meta

const baseArgs: INavbar = {
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
}

type Story = StoryObj<typeof meta>
export const BasicNavbar: Story = {
  args: {
    ...baseArgs,
  },
}

export const Fixed: Story = {
  args: {
    ...baseArgs,
  },
  render: (args) => (
    <div style={{ height: '200vh' }}>
      <Navbar {...args} fixed="top" />
      <Navbar {...args} fixed="bottom" />
    </div>
  ),
}

export const SpacedAndShaded: Story = {
  args: {
    ...baseArgs,
    color: 'danger',
    spaced: true,
    shaded: true,
  },
}
