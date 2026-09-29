import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'
import { MemoryRouter } from 'react-router'
import ConsentProvider from '../../contexts/ConsentContext'

import AnalyticsLink from './AnalyticsLink'
import ReactGA from 'react-ga4'

const meta = {
  title: 'Custom/Elements/AnalyticsLink',
  component: AnalyticsLink,
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
  decorators: [Story => (
    <MemoryRouter>
      <ConsentProvider>
        <Story />
      </ConsentProvider>
    </MemoryRouter>
  )],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const internalLink = canvas.getByText('internal link')
    await expect(internalLink).toBeVisible()
    await internalLink.click()
    await expect(ReactGA.event).not.toHaveBeenCalled()
  },
}

export const External: Story = {
  args: {
    label: 'external link',
    href: 'https://example.com',
    external: true,
    onClick: event => event.preventDefault(),
  },
  decorators: [Story => (
    <MemoryRouter>
      <ConsentProvider initial={true}>
        <Story />
      </ConsentProvider>
    </MemoryRouter>
  )],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const externalLink = canvas.getByText('external link')
    await expect(externalLink).toBeVisible()
    await externalLink.click()
    await expect(ReactGA.event).toHaveBeenCalled()
  },
}
