import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'
import Notification from '../Notification/Notification'

import Container from './Container'

const meta = {
  title: 'Bulma/Layout/Container',
  component: Container,
  tags: ['autodocs'],
} satisfies Meta<typeof Container>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    const container = canvas.getByText(args.children as string)
    await expect(container).toBeVisible()
    await expect(container).toHaveClass('container')
    await expect(container.tagName).toBe('DIV')
  },
}

export const WithContent: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    content: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const container = canvas.getByText(args.children as string)
    await expect(container).toBeVisible()
    await expect(container).toHaveClass('content')
  },
}

export const Sizes: Story = {
  args: {
    children: 'N/A',
  },
  render: () => (
    <>
      <Container size="widescreen">
        <Notification color="primary">This is a widescreen container.</Notification>
      </Container>
      <br />

      <Container size="fullhd">
        <Notification color="primary">This is a fullhd container.</Notification>
      </Container>
      <br />

      <Container size="max-tablet">
        <Notification color="primary">This is a max-tablet container.</Notification>
      </Container>
      <br />

      <Container size="max-desktop">
        <Notification color="primary">This is a max-desktop container.</Notification>
      </Container>
      <br />

      <Container size="max-widescreen">
        <Notification color="primary">This is a max-widescreen container.</Notification>
      </Container>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText('This is a widescreen container.')).toBeVisible()
    await expect(canvas.getByText('This is a widescreen container.').parentElement).toHaveClass('is-widescreen')

    await expect(canvas.getByText('This is a fullhd container.')).toBeVisible()
    await expect(canvas.getByText('This is a fullhd container.').parentElement).toHaveClass('is-fullhd')

    await expect(canvas.getByText('This is a max-tablet container.')).toBeVisible()
    await expect(canvas.getByText('This is a max-tablet container.').parentElement).toHaveClass('is-max-tablet')

    await expect(canvas.getByText('This is a max-desktop container.')).toBeVisible()
    await expect(canvas.getByText('This is a max-desktop container.').parentElement).toHaveClass('is-max-desktop')

    await expect(canvas.getByText('This is a max-widescreen container.')).toBeVisible()
    await expect(canvas.getByText('This is a max-widescreen container.').parentElement).toHaveClass('is-max-widescreen')
  },
}

export const Fluid: Story = {
  args: {
    children: 'This is a fluid container.',
    fluid: true,
  },
  render: args => (
    <Container fluid>
      <Notification color="primary">{args.children}</Notification>
    </Container>
  ),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(args.children as string)).toBeVisible()
    await expect(canvas.getByText(args.children as string).parentElement).toHaveClass('is-fluid')
  },
}
