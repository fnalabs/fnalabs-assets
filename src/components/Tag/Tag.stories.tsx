import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'

import Tag from './Tag'
import Tags from './Tags'

const meta = {
  title: 'Bulma/Elements/Tag',
  component: Tag,
  subcomponents: { Tags },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {
    children: 'Tag label',
  },
  play: async ({ canvas }) => {
    const tag = await canvas.getByText('Tag label')
    await expect(tag).toBeInTheDocument()
    await expect(tag).toHaveClass('tag')
  },
}

export const Colors: Story = {
  render: () => (
    <>
      <Tags>
        <Tag color="black">Black</Tag>
        <Tag color="dark">Dark</Tag>
        <Tag color="light">Light</Tag>
        <Tag color="white">White</Tag>
      </Tags>
      <Tags>
        <Tag color="primary">Primary</Tag>
        <Tag color="link">Link</Tag>
        <Tag color="info">Info</Tag>
        <Tag color="success">Success</Tag>
        <Tag color="warning">Warning</Tag>
        <Tag color="danger">Danger</Tag>
      </Tags>
      <Tags>
        <Tag color="primary" light>Primary</Tag>
        <Tag color="link" light>Link</Tag>
        <Tag color="info" light>Info</Tag>
        <Tag color="success" light>Success</Tag>
        <Tag color="warning" light>Warning</Tag>
        <Tag color="danger" light>Danger</Tag>
      </Tags>
    </>
  ),
  play: async ({ canvas }) => {
    expect(await canvas.getByText('Black')).toHaveClass('is-black')
    expect(await canvas.getByText('Dark')).toHaveClass('is-dark')
    expect(await canvas.getByText('Light')).toHaveClass('is-light')
    expect(await canvas.getByText('White')).toHaveClass('is-white')

    expect(await canvas.getAllByText('Primary')[0]).toHaveClass('is-primary')
    expect(await canvas.getAllByText('Primary')[1]).toHaveClass('is-light')

    expect(await canvas.getAllByText('Link')[0]).toHaveClass('is-link')
    expect(await canvas.getAllByText('Link')[1]).toHaveClass('is-light')

    expect(await canvas.getAllByText('Info')[0]).toHaveClass('is-info')
    expect(await canvas.getAllByText('Info')[1]).toHaveClass('is-light')

    expect(await canvas.getAllByText('Success')[0]).toHaveClass('is-success')
    expect(await canvas.getAllByText('Success')[1]).toHaveClass('is-light')

    expect(await canvas.getAllByText('Warning')[0]).toHaveClass('is-warning')
    expect(await canvas.getAllByText('Warning')[1]).toHaveClass('is-light')

    expect(await canvas.getAllByText('Danger')[0]).toHaveClass('is-danger')
    expect(await canvas.getAllByText('Danger')[1]).toHaveClass('is-light')
  },
}

export const Sizes: Story = {
  render: () => (
    <>
      <Tags>
        <Tag color="link" size="normal">Normal</Tag>
        <Tag color="primary" size="medium">Medium</Tag>
        <Tag color="info" size="large">Large</Tag>
      </Tags>
      <Tags size="medium">
        <Tag>All</Tag>
        <Tag>Medium</Tag>
        <Tag>Size</Tag>
      </Tags>
      <Tags size="large">
        <Tag>All</Tag>
        <Tag>Large</Tag>
        <Tag>Size</Tag>
      </Tags>
      <Tags size="medium">
        <Tag>Medium</Tag>
        <Tag size="normal">Normal</Tag>
        <Tag>Medium</Tag>
        <Tag size="large">Large</Tag>
        <Tag>Medium</Tag>
      </Tags>
    </>
  ),
  play: async ({ canvas }) => {
    const normalTags = await canvas.getAllByText('Normal')
    const mediumTags = await canvas.getAllByText('Medium')
    const largeTags = await canvas.getAllByText('Large')

    await expect(normalTags[0]).toHaveClass('is-normal')
    await expect(normalTags[0]).toHaveClass('is-link')
    await expect(mediumTags[0]).toHaveClass('is-medium')
    await expect(mediumTags[0]).toHaveClass('is-primary')
    await expect(largeTags[0]).toHaveClass('is-large')
    await expect(largeTags[0]).toHaveClass('is-info')

    await expect(mediumTags[1].parentElement).toHaveClass('are-medium')
    await expect(largeTags[1].parentElement).toHaveClass('are-large')

    await expect(mediumTags[2].parentElement).toHaveClass('are-medium')
    await expect(normalTags[1]).toHaveClass('is-normal')
    await expect(normalTags[1].parentElement).toHaveClass('are-medium')
    await expect(mediumTags[3].parentElement).toHaveClass('are-medium')
    await expect(largeTags[2]).toHaveClass('is-large')
    await expect(largeTags[2].parentElement).toHaveClass('are-medium')
    await expect(mediumTags[4].parentElement).toHaveClass('are-medium')
  },
}
