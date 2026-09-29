import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'

import Icon from './Icon'

const meta = {
  title: 'Bulma/Elements/Icon',
  component: Icon,
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {
    style: 'solid',
    name: 'home',
  },
}

export const IconText: Story = {
  args: {
    style: 'solid',
    name: 'home',
    children: 'Home',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    const iconText = canvas.getByText(args.children as string)
    await expect(iconText).toBeVisible()
    await expect(iconText.parentElement).toHaveClass('icon-text')
    await expect(iconText.parentElement?.tagName).toBe('SPAN')

    await expect(iconText.previousElementSibling).toHaveClass('icon')
    await expect(iconText.previousElementSibling?.tagName).toBe('SPAN')
  },
}

export const Colors: Story = {
  render: () => (
    <>
      <Icon style="solid" name="info-circle" color="info" />
      <Icon style="solid" name="check-square" color="success" />
      <Icon style="solid" name="exclamation-triangle" color="warning" />
      <Icon style="solid" name="ban" color="danger" />
      <br />
      <Icon style="solid" name="info-circle" color="info">Info</Icon>
      <Icon style="solid" name="check-square" color="success">Success</Icon>
      <Icon style="solid" name="exclamation-triangle" color="warning">Warning</Icon>
      <Icon style="solid" name="ban" color="danger">Danger</Icon>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Info')).toBeVisible()
    await expect(canvas.getByText('Info').parentElement).toHaveClass('has-text-info')

    await expect(canvas.getByText('Success')).toBeVisible()
    await expect(canvas.getByText('Success').parentElement).toHaveClass('has-text-success')

    await expect(canvas.getByText('Warning')).toBeVisible()
    await expect(canvas.getByText('Warning').parentElement).toHaveClass('has-text-warning')

    await expect(canvas.getByText('Danger')).toBeVisible()
    await expect(canvas.getByText('Danger').parentElement).toHaveClass('has-text-danger')
  },
}

export const Sizes: Story = {
  render: () => (
    <>
      <Icon style="solid" name="home" size="small" />
      <Icon style="solid" name="home" size="medium" />
      <Icon style="solid" name="home" size="large" />
    </>
  ),
}
