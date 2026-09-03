import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import type { INavbar } from '../../components/Navbar/Navbar'
import { MemoryRouter } from 'react-router'

import AppLayout from './AppLayout'

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

const meta = {
  title: 'Custom/Layouts/AppLayout',
  component: AppLayout,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof AppLayout>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {
    ...baseArgs,
  },
}
