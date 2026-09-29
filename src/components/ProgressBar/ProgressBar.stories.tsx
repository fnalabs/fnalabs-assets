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
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    const progressBar = canvas.getByRole('progressbar') as HTMLProgressElement
    await expect(progressBar).toBeVisible()
    await expect(progressBar.value).toBe(args.value)
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const progressBars = canvas.getAllByRole('progressbar') as HTMLProgressElement[]
    await expect(progressBars[0]).toHaveClass('is-small')
    await expect(progressBars[1]).not.toHaveClass('is-small')
    await expect(progressBars[1]).not.toHaveClass('is-medium')
    await expect(progressBars[1]).not.toHaveClass('is-large')
    await expect(progressBars[2]).toHaveClass('is-medium')
    await expect(progressBars[3]).toHaveClass('is-large')
  },
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const progressBars = canvas.getAllByRole('progressbar') as HTMLProgressElement[]
    for (const progressBar of progressBars) {
      await expect(progressBar).not.toHaveAttribute('value')
      await expect(progressBar).toHaveAttribute('max', '100')
    }
  },
}