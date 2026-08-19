import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'
import { MemoryRouter } from 'react-router'
import ConsentProvider from '../../contexts/ConsentContext'

import AnalyticsLink from './AnalyticsLink'

const meta = {
  title: 'Custom/Elements/AnalyticsLink',
  component: AnalyticsLink,
  decorators: [Story => (
    <MemoryRouter>
      <ConsentProvider>
        <Story />
      </ConsentProvider>
    </MemoryRouter>
  )],
  tags: ['autodocs'],
} satisfies Meta<typeof AnalyticsLink>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {
    label: 'internal link',
    href: '/',
    onClick: event => event.preventDefault(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const internalLink = canvas.getByText('internal link')
    await expect(internalLink).toBeVisible()
    await internalLink.click()
  },
}

export const External: Story = {
  args: {
    label: 'external link',
    href: 'https://example.com',
    external: true,
    onClick: event => event.preventDefault(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const externalLink = canvas.getByText('external link')
    await expect(externalLink).toBeVisible()
    await externalLink.click()
  },
}
