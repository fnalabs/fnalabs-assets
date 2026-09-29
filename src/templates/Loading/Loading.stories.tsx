import type { Meta, StoryObj } from 'storybook-react-rsbuild'

import Loading from './Loading'

const meta = {
  title: 'Custom/Molecules/Loading',
  component: Loading,
  tags: ['autodocs'],
} satisfies Meta<typeof Loading>
export default meta

type Story = StoryObj<typeof meta>
export const Defaults: Story = {}
