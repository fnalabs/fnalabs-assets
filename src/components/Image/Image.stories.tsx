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

    const image = canvas.getByRole('img') as HTMLImageElement
    await expect(image).toBeVisible()
    await expect(image.alt).toBe('test')
    await expect(image.src).toBe('https://bulma.io/assets/images/placeholders/128x128.png')

    await expect(image.parentElement).toHaveClass('image')
    await expect(image.parentElement).toHaveClass('is-128x128')
    await expect(image.parentElement?.tagName).toBe('FIGURE')
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const image = canvas.getByRole('img') as HTMLImageElement
    await expect(image).toBeVisible()
    await expect(image.src).toBe('https://bulma.io/assets/images/placeholders/256x256.png')
    await expect(image.parentElement).toHaveClass('is-128x128')
  },
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
      <div style={{ width: '10rem' }}>
        <span>16x16</span>
        <Image fixedSize="16x16">
          <img src="https://bulma.io/assets/images/placeholders/16x16.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        <span>24x24</span>
        <Image fixedSize="24x24">
          <img src="https://bulma.io/assets/images/placeholders/24x24.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        <span>32x32</span>
        <Image fixedSize="32x32">
          <img src="https://bulma.io/assets/images/placeholders/32x32.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        <span>48x48</span>
        <Image fixedSize="48x48">
          <img src="https://bulma.io/assets/images/placeholders/48x48.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        <span>64x64</span>
        <Image fixedSize="64x64">
          <img src="https://bulma.io/assets/images/placeholders/64x64.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        <span>96x96</span>
        <Image fixedSize="96x96">
          <img src="https://bulma.io/assets/images/placeholders/96x96.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        <span>128x128</span>
        <Image fixedSize="128x128">
          <img src="https://bulma.io/assets/images/placeholders/128x128.png" alt="test" />
        </Image>
      </div>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText('16x16').nextElementSibling).toHaveClass('is-16x16')
    await expect(canvas.getByText('24x24').nextElementSibling).toHaveClass('is-24x24')
    await expect(canvas.getByText('32x32').nextElementSibling).toHaveClass('is-32x32')
    await expect(canvas.getByText('48x48').nextElementSibling).toHaveClass('is-48x48')
    await expect(canvas.getByText('64x64').nextElementSibling).toHaveClass('is-64x64')
    await expect(canvas.getByText('96x96').nextElementSibling).toHaveClass('is-96x96')
    await expect(canvas.getByText('128x128').nextElementSibling).toHaveClass('is-128x128')
  },
}

export const Ratioed: Story = {
  args: {
    children: 'N/A',
  },
  render: () => (
    <>
      <div style={{ width: '10rem' }}>
        <span>1by1</span>
        <Image ratioSize="1by1">
          <img src="https://bulma.io/assets/images/placeholders/480x480.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        <span>5by4</span>
        <Image ratioSize="5by4">
          <img src="https://bulma.io/assets/images/placeholders/600x480.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        <span>4by3</span>
        <Image ratioSize="4by3">
          <img src="https://bulma.io/assets/images/placeholders/640x480.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        <span>3by2</span>
        <Image ratioSize="3by2">
          <img src="https://bulma.io/assets/images/placeholders/480x320.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        <span>5by3</span>
        <Image ratioSize="5by3">
          <img src="https://bulma.io/assets/images/placeholders/800x480.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        <span>16by9</span>
        <Image ratioSize="16by9">
          <img src="https://bulma.io/assets/images/placeholders/640x360.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        <span>2by1</span>
        <Image ratioSize="2by1">
          <img src="https://bulma.io/assets/images/placeholders/640x320.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        <span>3by1</span>
        <Image ratioSize="3by1">
          <img src="https://bulma.io/assets/images/placeholders/720x240.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        <span>4by5</span>
        <Image ratioSize="4by5">
          <img src="https://bulma.io/assets/images/placeholders/480x600.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        <span>3by4</span>
        <Image ratioSize="3by4">
          <img src="https://bulma.io/assets/images/placeholders/480x640.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        <span>2by3</span>
        <Image ratioSize="2by3">
          <img src="https://bulma.io/assets/images/placeholders/320x480.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        <span>3by5</span>
        <Image ratioSize="3by5">
          <img src="https://bulma.io/assets/images/placeholders/480x800.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        <span>9by16</span>
        <Image ratioSize="9by16">
          <img src="https://bulma.io/assets/images/placeholders/360x640.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        <span>1by2</span>
        <Image ratioSize="1by2">
          <img src="https://bulma.io/assets/images/placeholders/320x640.png" alt="test" />
        </Image>
      </div>
      <br />

      <div style={{ width: '10rem' }}>
        <span>1by3</span>
        <Image ratioSize="1by3">
          <img src="https://bulma.io/assets/images/placeholders/240x720.png" alt="test" />
        </Image>
      </div>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText('1by1').nextElementSibling).toHaveClass('is-1by1')
    await expect(canvas.getByText('5by4').nextElementSibling).toHaveClass('is-5by4')
    await expect(canvas.getByText('4by3').nextElementSibling).toHaveClass('is-4by3')
    await expect(canvas.getByText('3by2').nextElementSibling).toHaveClass('is-3by2')
    await expect(canvas.getByText('5by3').nextElementSibling).toHaveClass('is-5by3')
    await expect(canvas.getByText('16by9').nextElementSibling).toHaveClass('is-16by9')
    await expect(canvas.getByText('2by1').nextElementSibling).toHaveClass('is-2by1')
    await expect(canvas.getByText('3by1').nextElementSibling).toHaveClass('is-3by1')
    await expect(canvas.getByText('4by5').nextElementSibling).toHaveClass('is-4by5')
    await expect(canvas.getByText('3by4').nextElementSibling).toHaveClass('is-3by4')
    await expect(canvas.getByText('2by3').nextElementSibling).toHaveClass('is-2by3')
    await expect(canvas.getByText('3by5').nextElementSibling).toHaveClass('is-3by5')
    await expect(canvas.getByText('9by16').nextElementSibling).toHaveClass('is-9by16')
    await expect(canvas.getByText('1by2').nextElementSibling).toHaveClass('is-1by2')
    await expect(canvas.getByText('1by3').nextElementSibling).toHaveClass('is-1by3')
  },
}
