import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'
import { useContext } from 'react'
import { MemoryRouter } from 'react-router'
import ConsentProvider, { ConsentContext } from '../../contexts/ConsentContext'

import AnalyticsToast from './AnalyticsToast'
import { Cookies } from 'react-cookie-consent'

const meta = {
  title: 'Custom/Elements/AnalyticsToast',
  component: AnalyticsToast,
  tags: ['autodocs'],
} satisfies Meta<typeof AnalyticsToast>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {
    gaId: 'test',
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

    const buttons = canvas.getAllByRole('button')
    await expect(buttons[0]).toHaveTextContent('Decline')
    await expect(buttons[1]).toHaveTextContent('Accept')

    await expect(canvas.getByText('Cookie')).toBeVisible()
    await expect(canvas.getByText('Cookie').closest('a')?.href).toContain('/cookie')
    await expect(canvas.getByText('Privacy')).toBeVisible()
    await expect(canvas.getByText('Privacy').closest('a')?.href).toContain('/privacy')
  },
}

export const Accepted: Story = {
  args: {
    gaId: 'test',
  },
  decorators: [Story => (
    <MemoryRouter>
      <ConsentProvider>
        <Story />
      </ConsentProvider>
    </MemoryRouter>
  )],
  render: (args) => {
    const consent = useContext(ConsentContext)
    return (
      <>
        <AnalyticsToast {...args} />
        <p>Consent: {consent ? 'Accepted' : 'Declined'}</p>
      </>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const buttons = canvas.getAllByRole('button')
    await buttons[1].click()
    await expect(canvas.getByText('Consent: Accepted')).toBeVisible()
  },
}

export const Declined: Story = {
  args: {
    gaId: 'test',
  },
  decorators: [Story => (
    <MemoryRouter>
      <ConsentProvider>
        <Story />
      </ConsentProvider>
    </MemoryRouter>
  )],
  render: (args) => {
    const consent = useContext(ConsentContext)
    return (
      <>
        <AnalyticsToast {...args} />
        <p>Consent: {consent ? 'Accepted' : 'Declined'}</p>
      </>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const buttons = canvas.getAllByRole('button')
    await buttons[0].click()
    await expect(canvas.getByText('Consent: Declined')).toBeVisible()

    await expect(Cookies.get).toHaveBeenCalled()
    await expect(Cookies.set).toHaveBeenCalledWith('cookie-consent', 'false')
  },
}
