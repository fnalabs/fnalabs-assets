import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { MemoryRouter } from 'react-router'

import SocialBrand from './SocialBrand'

const meta = {
  title: 'Custom/Molecules/SocialBrand',
  component: SocialBrand,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof SocialBrand>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {
    brandIcon: 'FnALabsInverted'
  },
}

export const WithSocialLinks: Story = {
  args: {
    brandIcon: 'FnALabsInverted',
    socialLinks: [
      {
        name: 'github',
        style: 'brands',
        label: 'Github',
        href: '/github',
      },
      {
        name: 'npm',
        style: 'brands',
        label: 'NPM',
        href: '/npm',
      }
    ],
  },
}
