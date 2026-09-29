import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { createRoutesStub } from 'react-router'

import GlobalLayout from './GlobalLayout'

const meta = {
  title: 'Custom/Layouts/GlobalLayout',
  component: GlobalLayout,
  tags: ['autodocs'],
} satisfies Meta<typeof GlobalLayout>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {
    brandIcon: 'FnALabsInverted',
    pageLinks: [
      {
        label: 'Home',
        href: '/',
      },
    ],
    policyLinks: [
      {
        label: 'Privacy Policy',
        href: '/privacy-policy',
      },
    ],
    socialLinks: [
      {
        href: 'https://github.com/fnalabs',
        label: 'Github projects',
        style: 'brands',
        name: 'github'
      },
      {
        href: 'https://www.npmjs.com/org/fnalabs',
        label: 'NPM projects',
        style: 'brands',
        name: 'npm'
      },
      {
        href: 'mailto:contact@fnalabs.com',
        label: 'Email our team',
        style: 'regular',
        name: 'envelope'
      },
    ],
  },
  render: (args) => {
    const Stub = createRoutesStub([
      {
        path: '/',
        Component: () => <GlobalLayout {...args} />,
      },
    ])
    return <Stub />
  },
}
