import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'
import { useContext } from 'react'
import { MemoryRouter } from 'react-router'
import ConsentProvider, { ConsentContext } from '../../contexts/ConsentContext'

import AnalyticsToast from './AnalyticsToast'

const meta = {
  component: AnalyticsToast,
  tags: ['!dev', '!autodocs'],
} satisfies Meta<typeof AnalyticsToast>
export default meta

type Story = StoryObj<typeof meta>
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
