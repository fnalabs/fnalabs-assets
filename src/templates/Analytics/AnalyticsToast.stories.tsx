import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'
import { MemoryRouter } from 'react-router'
import ConsentProvider from '../../contexts/ConsentContext'

import AnalyticsToast from './AnalyticsToast'

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
