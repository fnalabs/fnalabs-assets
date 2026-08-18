import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'

import Notification from './Notification'

const Children = <>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
  <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
  nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam,
  et dictum <a>felis venenatis</a> efficitur.</>

const meta = {
  title: 'Bulma/Elements/Notification',
  component: Notification,
  tags: ['autodocs'],
} satisfies Meta<typeof Notification>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {
    children: Children,
  },
}

export const Colors: Story = {
  args: {
    children: Children,
  },
  render: args => (
    <>
      <Notification {...args} color='link' />
      <Notification {...args} color='primary' />
      <Notification {...args} color='info' />
      <Notification {...args} color='success' />
      <Notification {...args} color='warning' />
      <Notification {...args} color='danger' />
    </>
  ),
}

export const LightColors: Story = {
  args: {
    children: Children,
  },
  render: args => (
    <>
      <Notification {...args} color='link' light />
      <Notification {...args} color='primary' light />
      <Notification {...args} color='info' light />
      <Notification {...args} color='success' light />
      <Notification {...args} color='warning' light />
      <Notification {...args} color='danger' light />
    </>
  ),
}

export const WithClose: Story = {
  args: {
    children: Children,
    close: true,
  },
}
