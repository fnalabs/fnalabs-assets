import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'
import { type MouseEvent } from 'react'
import { MemoryRouter } from 'react-router'
import ConsentProvider from '../../contexts/ConsentContext'

import Button from './Button'
import Buttons from './Buttons'

const meta = {
  title: 'Bulma/Elements/Button',
  component: Button,
  decorators: [Story => (
    <MemoryRouter>
      <ConsentProvider>
        <Story />
      </ConsentProvider>
    </MemoryRouter>
  )],
  tags: ['autodocs'],
} satisfies Meta<typeof Button>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {
    children: 'Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Button')).toBeVisible()
  },
}

export const Link: Story = {
  args: {
    children: 'Link',
    href: '/',
    onClick: event => event.preventDefault(),
  },
  render: args => (
    <Buttons>
      <Button {...args}>Link 1</Button>
      <Button {...args} href="https://example.com" label="external link" external>Link 2</Button>
      <Button {...args} href="https://example.com" label="external link" external disabled>Link 3</Button>
    </Buttons>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button1 = canvas.getByText('Link 1')
    await expect(button1).toBeVisible()
    await expect(button1.closest('a')).toHaveAttribute('href', '/')

    const button2 = canvas.getByText('Link 3')
    await expect(button2).toBeVisible()
    await expect(button2.closest('a')).toHaveAttribute('href', 'https://example.com')

    button2.click()
    // TODO: implement event handler mock

    const button3 = canvas.getByText('Link 3')
    await expect(button3).toBeVisible()
    await expect(button3.closest('a')).toHaveAttribute('href', 'https://example.com')
    await expect(button3.closest('a')).toHaveAttribute('aria-disabled', 'true')

    button3.click()
    // TODO: implement event handler mock
  },
}

export const Submit: Story = {
  args: {
    children: 'Submit',
    type: 'submit',
  },
  render: args => (<Button {...args} />),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    await expect(button).toBeVisible()
    await expect(button).toHaveProperty('type', 'submit')
  },
}

export const Colors: Story = {
  args: {
    children: 'N/A',
  },
  render: () => (
    <>
      <h2>Normal</h2>
      <Buttons>
        <Button color="white">White(N)</Button>
        <Button color="light">Light(N)</Button>
        <Button color="dark">Dark(N)</Button>
        <Button color="black">Black(N)</Button>
        <Button color="text">Text(N)</Button>
        <Button color="ghost">Ghost(N)</Button>
      </Buttons>
      <Buttons>
        <Button color="primary">Primary(N)</Button>
        <Button color="link">Link(N)</Button>
        <Button color="info">Info(N)</Button>
        <Button color="success">Success(N)</Button>
        <Button color="warning">Warning(N)</Button>
        <Button color="danger">Danger(N)</Button>
      </Buttons>

      <h2>Light</h2>
      <Buttons>
        <Button color="primary" colorMode="light">Primary(L)</Button>
        <Button color="link" colorMode="light">Link(L)</Button>
        <Button color="info" colorMode="light">Info(L)</Button>
        <Button color="success" colorMode="light">Success(L)</Button>
        <Button color="warning" colorMode="light">Warning(L)</Button>
        <Button color="danger" colorMode="light">Danger(L)</Button>
      </Buttons>

      <h2>Dark</h2>
      <Buttons>
        <Button color="primary" colorMode="dark">Primary(D)</Button>
        <Button color="link" colorMode="dark">Link(D)</Button>
        <Button color="info" colorMode="dark">Info(D)</Button>
        <Button color="success" colorMode="dark">Success(D)</Button>
        <Button color="warning" colorMode="dark">Warning(D)</Button>
        <Button color="danger" colorMode="dark">Danger(D)</Button>
      </Buttons>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('White(N)')).toBeVisible()
    await expect(canvas.getByText('White(N)').parentElement).toHaveClass('is-white')

    await expect(canvas.getByText('Light(N)')).toBeVisible()
    await expect(canvas.getByText('Light(N)').parentElement).toHaveClass('is-light')

    await expect(canvas.getByText('Dark(N)')).toBeVisible()
    await expect(canvas.getByText('Dark(N)').parentElement).toHaveClass('is-dark')

    await expect(canvas.getByText('Black(N)')).toBeVisible()
    await expect(canvas.getByText('Black(N)').parentElement).toHaveClass('is-black')

    await expect(canvas.getByText('Text(N)')).toBeVisible()
    await expect(canvas.getByText('Text(N)').parentElement).toHaveClass('is-text')

    await expect(canvas.getByText('Ghost(N)')).toBeVisible()
    await expect(canvas.getByText('Ghost(N)').parentElement).toHaveClass('is-ghost')

    await expect(canvas.getByText('Primary(N)')).toBeVisible()
    await expect(canvas.getByText('Primary(N)').parentElement).toHaveClass('is-primary')

    await expect(canvas.getByText('Link(N)')).toBeVisible()
    await expect(canvas.getByText('Link(N)').parentElement).toHaveClass('is-link')

    await expect(canvas.getByText('Info(N)')).toBeVisible()
    await expect(canvas.getByText('Info(N)').parentElement).toHaveClass('is-info')

    await expect(canvas.getByText('Success(N)')).toBeVisible()
    await expect(canvas.getByText('Success(N)').parentElement).toHaveClass('is-success')

    await expect(canvas.getByText('Warning(N)')).toBeVisible()
    await expect(canvas.getByText('Warning(N)').parentElement).toHaveClass('is-warning')

    await expect(canvas.getByText('Danger(N)')).toBeVisible()
    await expect(canvas.getByText('Danger(N)').parentElement).toHaveClass('is-danger')

    await expect(canvas.getByText('Primary(L)')).toBeVisible()
    await expect(canvas.getByText('Primary(L)').parentElement).toHaveClass('is-primary is-light')

    await expect(canvas.getByText('Link(L)')).toBeVisible()
    await expect(canvas.getByText('Link(L)').parentElement).toHaveClass('is-link is-light')

    await expect(canvas.getByText('Info(L)')).toBeVisible()
    await expect(canvas.getByText('Info(L)').parentElement).toHaveClass('is-info is-light')

    await expect(canvas.getByText('Success(L)')).toBeVisible()
    await expect(canvas.getByText('Success(L)').parentElement).toHaveClass('is-success is-light')

    await expect(canvas.getByText('Warning(L)')).toBeVisible()
    await expect(canvas.getByText('Warning(L)').parentElement).toHaveClass('is-warning is-light')

    await expect(canvas.getByText('Danger(L)')).toBeVisible()
    await expect(canvas.getByText('Danger(L)').parentElement).toHaveClass('is-danger is-light')

    await expect(canvas.getByText('Primary(D)')).toBeVisible()
    await expect(canvas.getByText('Primary(D)').parentElement).toHaveClass('is-primary is-dark')

    await expect(canvas.getByText('Link(D)')).toBeVisible()
    await expect(canvas.getByText('Link(D)').parentElement).toHaveClass('is-link is-dark')

    await expect(canvas.getByText('Info(D)')).toBeVisible()
    await expect(canvas.getByText('Info(D)').parentElement).toHaveClass('is-info is-dark')

    await expect(canvas.getByText('Success(D)')).toBeVisible()
    await expect(canvas.getByText('Success(D)').parentElement).toHaveClass('is-success is-dark')

    await expect(canvas.getByText('Warning(D)')).toBeVisible()
    await expect(canvas.getByText('Warning(D)').parentElement).toHaveClass('is-warning is-dark')

    await expect(canvas.getByText('Danger(D)')).toBeVisible()
    await expect(canvas.getByText('Danger(D)').parentElement).toHaveClass('is-danger is-dark')
  },
}

export const Sizes: Story = {
  args: {
    children: 'N/A',
  },
  render: () => (
    <>
      <Buttons>
        <Button size="small">Small</Button>
        <Button>Default</Button>
        <Button size="normal">Normal</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </Buttons>
      <Buttons size="medium">
        <Button>All</Button>
        <Button>MD</Button>
        <Button>Size</Button>
      </Buttons>
      <Buttons size="small">
        <Button>SM</Button>
        <Button>SM</Button>
        <Button>SM</Button>
        <Button size="normal">NM</Button>
        <Button>SM</Button>
      </Buttons>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Small')).toBeVisible()
    await expect(canvas.getByText('Small').parentElement).toHaveClass('is-small')

    await expect(canvas.getByText('Default')).toBeVisible()

    await expect(canvas.getByText('Normal')).toBeVisible()
    await expect(canvas.getByText('Normal').parentElement).toHaveClass('is-normal')

    await expect(canvas.getByText('Medium')).toBeVisible()
    await expect(canvas.getByText('Medium').parentElement).toHaveClass('is-medium')

    await expect(canvas.getByText('Large')).toBeVisible()
    await expect(canvas.getByText('Large').parentElement).toHaveClass('is-large')
  },
}

export const FullWidth: Story = {
  args: {
    children: 'N/A',
    fullWidth: true,
  },
  render: args => (
    <Buttons>
      <Button size="small" fullWidth>Small</Button>
      <Button fullWidth>Normal</Button>
      <Button size="medium" fullWidth>Medium</Button>
      <Button size="large" fullWidth>Large</Button>
    </Buttons>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Small')).toBeVisible()
    await expect(canvas.getByText('Small').parentElement).toHaveClass('is-small is-fullwidth')

    await expect(canvas.getByText('Normal')).toBeVisible()
    await expect(canvas.getByText('Normal').parentElement).toHaveClass('is-fullwidth')

    await expect(canvas.getByText('Medium')).toBeVisible()
    await expect(canvas.getByText('Medium').parentElement).toHaveClass('is-medium is-fullwidth')

    await expect(canvas.getByText('Large')).toBeVisible()
    await expect(canvas.getByText('Large').parentElement).toHaveClass('is-large is-fullwidth')
  },
}

export const Styles: Story = {
  args: {
    children: 'N/A',
  },
  render: () => (
    <>
      <h2>Outlined</h2>
      <Buttons>
        <Button color="link" style="outlined">Outlined Link</Button>
        <Button color="primary" style="outlined">Outlined Primary</Button>
        <Button color="info" style="outlined">Outlined Info</Button>
        <Button color="success" style="outlined">Outlined Success</Button>
        <Button color="danger" style="outlined">Outlined Danger</Button>
      </Buttons>

      <h2>Inverted</h2>
      <Buttons>
        <Button color="link" style="inverted">Inverted Link</Button>
        <Button color="primary" style="inverted">Inverted Primary</Button>
        <Button color="info" style="inverted">Inverted Info</Button>
        <Button color="success" style="inverted">Inverted Success</Button>
        <Button color="danger" style="inverted">Inverted Danger</Button>
      </Buttons>

      <h2>Rounded</h2>
      <Buttons>
        <Button color="link" style="rounded">Rounded Link</Button>
        <Button color="primary" style="rounded">Rounded Primary</Button>
        <Button color="info" style="rounded">Rounded Info</Button>
        <Button color="success" style="rounded">Rounded Success</Button>
        <Button color="danger" style="rounded">Rounded Danger</Button>
      </Buttons>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Outlined Link')).toBeVisible()
    await expect(canvas.getByText('Outlined Link').parentElement).toHaveClass('is-link is-outlined')

    await expect(canvas.getByText('Outlined Primary')).toBeVisible()
    await expect(canvas.getByText('Outlined Primary').parentElement).toHaveClass('is-primary is-outlined')

    await expect(canvas.getByText('Outlined Info')).toBeVisible()
    await expect(canvas.getByText('Outlined Info').parentElement).toHaveClass('is-info is-outlined')

    await expect(canvas.getByText('Outlined Success')).toBeVisible()
    await expect(canvas.getByText('Outlined Success').parentElement).toHaveClass('is-success is-outlined')

    await expect(canvas.getByText('Outlined Danger')).toBeVisible()
    await expect(canvas.getByText('Outlined Danger').parentElement).toHaveClass('is-danger is-outlined')

    await expect(canvas.getByText('Inverted Link')).toBeVisible()
    await expect(canvas.getByText('Inverted Link').parentElement).toHaveClass('is-link is-inverted')

    await expect(canvas.getByText('Inverted Primary')).toBeVisible()
    await expect(canvas.getByText('Inverted Primary').parentElement).toHaveClass('is-primary is-inverted')

    await expect(canvas.getByText('Inverted Info')).toBeVisible()
    await expect(canvas.getByText('Inverted Info').parentElement).toHaveClass('is-info is-inverted')

    await expect(canvas.getByText('Inverted Success')).toBeVisible()
    await expect(canvas.getByText('Inverted Success').parentElement).toHaveClass('is-success is-inverted')

    await expect(canvas.getByText('Inverted Danger')).toBeVisible()
    await expect(canvas.getByText('Inverted Danger').parentElement).toHaveClass('is-danger is-inverted')

    await expect(canvas.getByText('Rounded Link')).toBeVisible()
    await expect(canvas.getByText('Rounded Link').parentElement).toHaveClass('is-link is-rounded')

    await expect(canvas.getByText('Rounded Primary')).toBeVisible()
    await expect(canvas.getByText('Rounded Primary').parentElement).toHaveClass('is-primary is-rounded')

    await expect(canvas.getByText('Rounded Info')).toBeVisible()
    await expect(canvas.getByText('Rounded Info').parentElement).toHaveClass('is-info is-rounded')

    await expect(canvas.getByText('Rounded Success')).toBeVisible()
    await expect(canvas.getByText('Rounded Success').parentElement).toHaveClass('is-success is-rounded')

    await expect(canvas.getByText('Rounded Danger')).toBeVisible()
    await expect(canvas.getByText('Rounded Danger').parentElement).toHaveClass('is-danger is-rounded')
  },
}

export const States: Story = {
  args: {
    children: 'N/A',
  },
  render: () => (
    <>
      <h2>Hover</h2>
      <Buttons>
        <Button state="hovered">Hovered Button</Button>
        <Button color="link" state="hovered">Hovered Link</Button>
        <Button color="primary" state="hovered">Hovered Primary</Button>
        <Button color="info" state="hovered">Hovered Info</Button>
        <Button color="success" state="hovered">Hovered Success</Button>
        <Button color="warning" state="hovered">Hovered Warning</Button>
        <Button color="danger" state="hovered">Hovered Danger</Button>
      </Buttons>

      <h2>Focus</h2>
      <Buttons>
        <Button state="focused">Focused Button</Button>
        <Button color="link" state="focused">Focused Link</Button>
        <Button color="primary" state="focused">Focused Primary</Button>
        <Button color="info" state="focused">Focused Info</Button>
        <Button color="success" state="focused">Focused Success</Button>
        <Button color="warning" state="focused">Focused Warning</Button>
        <Button color="danger" state="focused">Focused Danger</Button>
      </Buttons>

      <h2>Active</h2>
      <Buttons>
        <Button state="active">Active Button</Button>
        <Button color="link" state="active">Active Link</Button>
        <Button color="primary" state="active">Active Primary</Button>
        <Button color="info" state="active">Active Info</Button>
        <Button color="success" state="active">Active Success</Button>
        <Button color="warning" state="active">Active Warning</Button>
        <Button color="danger" state="active">Active Danger</Button>
      </Buttons>

      <h2>Loading</h2>
      <Buttons>
        <Button state="loading">Loading Button</Button>
        <Button color="link" state="loading">Loading Link</Button>
        <Button color="primary" state="loading">Loading Primary</Button>
        <Button color="info" state="loading">Loading Info</Button>
        <Button color="success" state="loading">Loading Success</Button>
        <Button color="warning" state="loading">Loading Warning</Button>
        <Button color="danger" state="loading">Loading Danger</Button>
      </Buttons>

      <h2>Disabled</h2>
      <Buttons>
        <Button disabled>Disabled Button</Button>
        <Button color="link" disabled>Disabled Link</Button>
        <Button color="primary" disabled>Disabled Primary</Button>
        <Button color="info" disabled>Disabled Info</Button>
        <Button color="success" disabled>Disabled Success</Button>
        <Button color="warning" disabled>Disabled Warning</Button>
        <Button color="danger" disabled>Disabled Danger</Button>
      </Buttons>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Hovered Button')).toBeVisible()
    await expect(canvas.getByText('Hovered Button').parentElement).toHaveClass('is-hovered')

    await expect(canvas.getByText('Hovered Link')).toBeVisible()
    await expect(canvas.getByText('Hovered Link').parentElement).toHaveClass('is-link is-hovered')

    await expect(canvas.getByText('Hovered Primary')).toBeVisible()
    await expect(canvas.getByText('Hovered Primary').parentElement).toHaveClass('is-primary is-hovered')

    await expect(canvas.getByText('Hovered Info')).toBeVisible()
    await expect(canvas.getByText('Hovered Info').parentElement).toHaveClass('is-info is-hovered')

    await expect(canvas.getByText('Hovered Success')).toBeVisible()
    await expect(canvas.getByText('Hovered Success').parentElement).toHaveClass('is-success is-hovered')

    await expect(canvas.getByText('Hovered Warning')).toBeVisible()
    await expect(canvas.getByText('Hovered Warning').parentElement).toHaveClass('is-warning is-hovered')

    await expect(canvas.getByText('Hovered Danger')).toBeVisible()
    await expect(canvas.getByText('Hovered Danger').parentElement).toHaveClass('is-danger is-hovered')

    await expect(canvas.getByText('Focused Button')).toBeVisible()
    await expect(canvas.getByText('Focused Button').parentElement).toHaveClass('is-focused')

    await expect(canvas.getByText('Focused Link')).toBeVisible()
    await expect(canvas.getByText('Focused Link').parentElement).toHaveClass('is-link is-focused')

    await expect(canvas.getByText('Focused Primary')).toBeVisible()
    await expect(canvas.getByText('Focused Primary').parentElement).toHaveClass('is-primary is-focused')

    await expect(canvas.getByText('Focused Info')).toBeVisible()
    await expect(canvas.getByText('Focused Info').parentElement).toHaveClass('is-info is-focused')

    await expect(canvas.getByText('Focused Success')).toBeVisible()
    await expect(canvas.getByText('Focused Success').parentElement).toHaveClass('is-success is-focused')

    await expect(canvas.getByText('Focused Warning')).toBeVisible()
    await expect(canvas.getByText('Focused Warning').parentElement).toHaveClass('is-warning is-focused')

    await expect(canvas.getByText('Focused Danger')).toBeVisible()
    await expect(canvas.getByText('Focused Danger').parentElement).toHaveClass('is-danger is-focused')

    await expect(canvas.getByText('Active Button')).toBeVisible()
    await expect(canvas.getByText('Active Button').parentElement).toHaveClass('is-active')

    await expect(canvas.getByText('Active Link')).toBeVisible()
    await expect(canvas.getByText('Active Link').parentElement).toHaveClass('is-link is-active')

    await expect(canvas.getByText('Active Primary')).toBeVisible()
    await expect(canvas.getByText('Active Primary').parentElement).toHaveClass('is-primary is-active')

    await expect(canvas.getByText('Active Info')).toBeVisible()
    await expect(canvas.getByText('Active Info').parentElement).toHaveClass('is-info is-active')

    await expect(canvas.getByText('Active Success')).toBeVisible()
    await expect(canvas.getByText('Active Success').parentElement).toHaveClass('is-success is-active')

    await expect(canvas.getByText('Active Warning')).toBeVisible()
    await expect(canvas.getByText('Active Warning').parentElement).toHaveClass('is-warning is-active')

    await expect(canvas.getByText('Active Danger')).toBeVisible()
    await expect(canvas.getByText('Active Danger').parentElement).toHaveClass('is-danger is-active')

    await expect(canvas.getByText('Loading Button')).toBeVisible()
    await expect(canvas.getByText('Loading Button').parentElement).toHaveClass('is-loading')

    await expect(canvas.getByText('Loading Link')).toBeVisible()
    await expect(canvas.getByText('Loading Link').parentElement).toHaveClass('is-link is-loading')

    await expect(canvas.getByText('Loading Primary')).toBeVisible()
    await expect(canvas.getByText('Loading Primary').parentElement).toHaveClass('is-primary is-loading')

    await expect(canvas.getByText('Loading Info')).toBeVisible()
    await expect(canvas.getByText('Loading Info').parentElement).toHaveClass('is-info is-loading')

    await expect(canvas.getByText('Loading Success')).toBeVisible()
    await expect(canvas.getByText('Loading Success').parentElement).toHaveClass('is-success is-loading')

    await expect(canvas.getByText('Loading Warning')).toBeVisible()
    await expect(canvas.getByText('Loading Warning').parentElement).toHaveClass('is-warning is-loading')

    await expect(canvas.getByText('Loading Danger')).toBeVisible()
    await expect(canvas.getByText('Loading Danger').parentElement).toHaveClass('is-danger is-loading')

    await expect(canvas.getByText('Disabled Button')).toBeVisible()
    await expect(canvas.getByText('Disabled Button').parentElement).toBeDisabled()

    await expect(canvas.getByText('Disabled Link')).toBeVisible()
    await expect(canvas.getByText('Disabled Link').parentElement).toHaveClass('is-link')
    await expect(canvas.getByText('Disabled Link').parentElement).toBeDisabled()

    await expect(canvas.getByText('Disabled Primary')).toBeVisible()
    await expect(canvas.getByText('Disabled Primary').parentElement).toHaveClass('is-primary')
    await expect(canvas.getByText('Disabled Primary').parentElement).toBeDisabled()

    await expect(canvas.getByText('Disabled Info')).toBeVisible()
    await expect(canvas.getByText('Disabled Info').parentElement).toHaveClass('is-info')
    await expect(canvas.getByText('Disabled Info').parentElement).toBeDisabled()

    await expect(canvas.getByText('Disabled Success')).toBeVisible()
    await expect(canvas.getByText('Disabled Success').parentElement).toHaveClass('is-success')
    await expect(canvas.getByText('Disabled Success').parentElement).toBeDisabled()

    await expect(canvas.getByText('Disabled Warning')).toBeVisible()
    await expect(canvas.getByText('Disabled Warning').parentElement).toHaveClass('is-warning')
    await expect(canvas.getByText('Disabled Warning').parentElement).toBeDisabled()

    await expect(canvas.getByText('Disabled Danger')).toBeVisible()
    await expect(canvas.getByText('Disabled Danger').parentElement).toHaveClass('is-danger')
    await expect(canvas.getByText('Disabled Danger').parentElement).toBeDisabled()
  },
}

export const FontAwesomeIcons: Story = {
  args: {
    children: 'N/A',
  },
  render: () => (
    <Buttons>
      <Button beforeIcon="check" color="success">Save</Button>
      <Button afterIcon="times" color="danger" style="outlined">Delete</Button>
    </Buttons>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const saveButton = canvas.getByText('Save')
    await expect(saveButton).toBeVisible()
    await expect(saveButton.parentElement).toHaveClass('is-success')
    await expect(saveButton.parentElement?.querySelector('i')).toHaveClass('fa-check')

    const deleteButton = canvas.getByText('Delete')
    await expect(deleteButton).toBeVisible()
    await expect(deleteButton.parentElement).toHaveClass('is-danger')
    await expect(deleteButton.parentElement?.querySelector('i')).toHaveClass('fa-times')
  },
}

export const ListOfButtons: Story = {
  args: {
    children: 'N/A',
  },
  render: () => (
    <>
      <Buttons addons>
        <Button color="success" selected>Normal Yes</Button>
        <Button>Normal Maybe</Button>
        <Button>Normal No</Button>
      </Buttons>

      <Buttons position="centered" addons>
        <Button>Centered Yes</Button>
        <Button color="info" selected>Centered Maybe</Button>
        <Button>Centered No</Button>
      </Buttons>

      <Buttons position="right" addons>
        <Button>Right Yes</Button>
        <Button>Right Maybe</Button>
        <Button color="danger" selected>Right No</Button>
      </Buttons>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Normal Yes').parentElement?.parentElement).toHaveClass('has-addons')
    await expect(canvas.getByText('Normal Yes')).toBeVisible()
    await expect(canvas.getByText('Normal Yes').parentElement).toHaveClass('is-success is-selected')
    await expect(canvas.getByText('Normal Maybe')).toBeVisible()
    await expect(canvas.getByText('Normal No')).toBeVisible()

    await expect(canvas.getByText('Centered Yes').parentElement?.parentElement).toHaveClass('has-addons is-centered')
    await expect(canvas.getByText('Centered Yes')).toBeVisible()
    await expect(canvas.getByText('Centered Maybe')).toBeVisible()
    await expect(canvas.getByText('Centered Maybe').parentElement).toHaveClass('is-info is-selected')
    await expect(canvas.getByText('Centered No')).toBeVisible()

    await expect(canvas.getByText('Right Yes').parentElement?.parentElement).toHaveClass('has-addons is-right')
    await expect(canvas.getByText('Right Yes')).toBeVisible()
    await expect(canvas.getByText('Right Maybe')).toBeVisible()
    await expect(canvas.getByText('Right No')).toBeVisible()
    await expect(canvas.getByText('Right No').parentElement).toHaveClass('is-danger is-selected')
  }
}