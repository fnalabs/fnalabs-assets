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
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    const brandLink = canvas.getByLabelText(args.brandLink[0].label)
    await expect(brandLink).toBeVisible()
    await expect(brandLink.tagName).toBe('A')

    await expect(brandLink.parentElement).toHaveClass('navbar-brand')
    await expect(brandLink.parentElement?.tagName).toBe('DIV')
    await expect(brandLink.parentElement?.parentElement).toHaveClass('container')
    await expect(brandLink.parentElement?.parentElement?.tagName).toBe('DIV')
    await expect(brandLink.parentElement?.parentElement?.parentElement).toHaveClass('navbar')
    await expect(brandLink.parentElement?.parentElement?.parentElement?.tagName).toBe('NAV')

    const homeLink = canvas.getByText(args.startLinks[0].label)
    await expect(homeLink).toBeVisible()
    await expect(homeLink).toHaveClass('navbar-item')
    await expect(homeLink.tagName).toBe('A')

    const documentationLink = canvas.getByText(args.startLinks[1].label)
    await expect(documentationLink).toBeVisible()
    await expect(documentationLink).toHaveClass('navbar-item')
    await expect(documentationLink.tagName).toBe('A')

    const moreLink = canvas.getByText(args.startLinks[2].label)
    await expect(moreLink).toBeVisible()
    await expect(moreLink).toHaveClass('navbar-link')
    await expect(moreLink.tagName).toBe('A')

    const signUpLink = canvas.getByText(args.endLinks[0].label)
    await expect(signUpLink).toBeVisible()
    await expect(signUpLink.parentElement).toHaveClass('button')
    await expect(signUpLink.parentElement?.tagName).toBe('A')

    const loginLink = canvas.getByText(args.endLinks[1].label)
    await expect(loginLink).toBeVisible()
    await expect(loginLink.parentElement).toHaveClass('button')
    await expect(loginLink.parentElement?.tagName).toBe('A')
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const topNavbar = canvas.getAllByRole('navigation')[0]
    await expect(topNavbar).toBeVisible()
    await expect(topNavbar).toHaveClass('is-fixed-top')

    const bottomNavbar = canvas.getAllByRole('navigation')[1]
    await expect(bottomNavbar).toBeVisible()
    await expect(bottomNavbar).toHaveClass('is-fixed-bottom')
  },
}

export const SpacedAndShaded: Story = {
  args: {
    ...baseArgs,
    color: 'danger',
    spaced: true,
    shaded: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const navbar = canvas.getByRole('navigation')
    await expect(navbar).toBeVisible()
    await expect(navbar).toHaveClass('is-spaced')
    await expect(navbar).toHaveClass('has-shadow')
  },
}
