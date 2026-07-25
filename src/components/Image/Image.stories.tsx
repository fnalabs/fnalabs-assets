import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'

import Image from './Image'

const meta = {
  title: 'Bulma/Elements/Image',
  component: Image,
  tags: ['autodocs'],
} satisfies Meta<typeof Image>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {
    children: 'N/A',
  },
  render: () => (
    <Image fixedSize="128x128">
      <img src="https://bulma.io/assets/images/placeholders/128x128.png" alt="test" />
    </Image>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('img')).toBeVisible()
  },
}

export const Rounded: Story = {
  args: {
    children: 'N/A',
  },
  render: () => (
    <Image fixedSize="128x128">
      <img className="is-rounded" src="https://bulma.io/assets/images/placeholders/128x128.png" alt="test" />
    </Image>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('img')).toBeVisible()
    await expect(canvas.getByRole('img')).toHaveClass('is-rounded')
  },
}

export const Retina: Story = {
  args: {
    children: 'N/A',
  },
  render: () => (
    <Image fixedSize="128x128">
      <img src="https://bulma.io/assets/images/placeholders/256x256.png" alt="test" />
    </Image>
  ),
}

export const Centered: Story = {
  args: {
    children: <img src="https://bulma.io/assets/images/placeholders/128x128.png" alt="test" />,
    fixedSize: '128x128',
    centered: true,
    hcentered: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const image = canvas.getByRole('img')
    await expect(image).toBeVisible()

    await expect(image.parentElement).toHaveClass('mx-auto')
    await expect(image.parentElement).toHaveClass('is-flex')
    await expect(image.parentElement).toHaveClass('is-align-items-end')
  },
}

export const Fixed: Story = {
  args: {
    children: 'N/A',
  },
  render: () => (
    <>
      <Image fixedSize="16x16">
        <img src="https://bulma.io/assets/images/placeholders/16x16.png" alt="test" />
      </Image>
      <br />

      <Image fixedSize="24x24">
        <img src="https://bulma.io/assets/images/placeholders/24x24.png" alt="test" />
      </Image>
      <br />

      <Image fixedSize="32x32">
        <img src="https://bulma.io/assets/images/placeholders/32x32.png" alt="test" />
      </Image>
      <br />

      <Image fixedSize="48x48">
        <img src="https://bulma.io/assets/images/placeholders/48x48.png" alt="test" />
      </Image>
      <br />

      <Image fixedSize="64x64">
        <img src="https://bulma.io/assets/images/placeholders/64x64.png" alt="test" />
      </Image>
      <br />

      <Image fixedSize="96x96">
        <img src="https://bulma.io/assets/images/placeholders/96x96.png" alt="test" />
      </Image>
      <br />

      <Image fixedSize="128x128">
        <img src="https://bulma.io/assets/images/placeholders/128x128.png" alt="test" />
      </Image>
    </>
  ),
}

export const Ratioed: Story = {
  args: {
    children: 'N/A',
  },
  render: () => (
    <>
      <div style={{ width: '10rem' }}>
        1by1
        <Image ratioSize="1by1">
          <img src="https://bulma.io/assets/images/placeholders/480x480.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        5by4
        <Image ratioSize="5by4">
          <img src="https://bulma.io/assets/images/placeholders/600x480.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        4by3
        <Image ratioSize="4by3">
          <img src="https://bulma.io/assets/images/placeholders/640x480.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        3by2
        <Image ratioSize="3by2">
          <img src="https://bulma.io/assets/images/placeholders/480x320.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        5by3
        <Image ratioSize="5by3">
          <img src="https://bulma.io/assets/images/placeholders/800x480.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        16by9
        <Image ratioSize="16by9">
          <img src="https://bulma.io/assets/images/placeholders/640x360.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        2by1
        <Image ratioSize="2by1">
          <img src="https://bulma.io/assets/images/placeholders/640x320.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        3by1
        <Image ratioSize="3by1">
          <img src="https://bulma.io/assets/images/placeholders/720x240.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        4by5
        <Image ratioSize="4by5">
          <img src="https://bulma.io/assets/images/placeholders/480x600.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        3by4
        <Image ratioSize="3by4">
          <img src="https://bulma.io/assets/images/placeholders/480x640.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        2by3
        <Image ratioSize="2by3">
          <img src="https://bulma.io/assets/images/placeholders/320x480.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        3by5
        <Image ratioSize="3by5">
          <img src="https://bulma.io/assets/images/placeholders/480x800.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        9by16
        <Image ratioSize="9by16">
          <img src="https://bulma.io/assets/images/placeholders/360x640.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        1by2
        <Image ratioSize="1by2">
          <img src="https://bulma.io/assets/images/placeholders/320x640.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        1by3
        <Image ratioSize="1by3">
          <img src="https://bulma.io/assets/images/placeholders/240x720.png" alt="test" />
        </Image>
      </div>
    </>
  ),
}
