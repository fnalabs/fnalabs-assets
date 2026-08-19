import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'
import { MemoryRouter } from 'react-router'
import ConsentProvider from '../../contexts/ConsentContext'

import AnalyticsToast from './AnalyticsToast'

const meta = {
  title: 'Custom/Elements/AnalyticsToast',
  component: AnalyticsToast,
  decorators: [Story => (
    <MemoryRouter>
      <ConsentProvider>
        <Story />
      </ConsentProvider>
    </MemoryRouter>
  )],
  tags: ['autodocs'],
} satisfies Meta<typeof AnalyticsToast>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {
    gaId: 'test',
  },
}
