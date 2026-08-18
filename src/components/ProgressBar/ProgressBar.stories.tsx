import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'

import ProgressBar from './ProgressBar'

const meta = {
  title: 'Bulma/Elements/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressBar>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {
    value: 15,
  },
}

export const Colors: Story = {
  args: {},
  render: () => (
    <>
      <ProgressBar value={15} color='link' />
      <ProgressBar value={30} color='primary' />
      <ProgressBar value={45} color='info' />
      <ProgressBar value={60} color='success' />
      <ProgressBar value={75} color='warning' />
      <ProgressBar value={90} color='danger' />
    </>
  ),
}

export const Sizes: Story = {
  args: {},
  render: () => (
    <>
      <ProgressBar value={20} size='small' />
      <ProgressBar value={40} />
      <ProgressBar value={60} size='medium' />
      <ProgressBar value={80} size='large' />
    </>
  ),
}

export const Indeterminate: Story = {
  args: {},
  render: () => (
    <>
      <ProgressBar color='primary' size='small' />
      <ProgressBar color='danger' />
      <ProgressBar color='light' size='medium' />
      <ProgressBar color='info' size='large' />
    </>
  ),
}