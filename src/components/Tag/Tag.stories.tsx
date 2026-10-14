import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect } from 'storybook/test'
import { MemoryRouter } from 'react-router'

import Tag from './Tag'
import Tags from './Tags'
import Button from '../Button/Button'
import Level from '../Level/Level'

const meta = {
  title: 'Bulma/Elements/Tag',
  component: Tag,
  subcomponents: { Tags },
  tags: ['autodocs'],
  decorators: [Story => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  )],
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

export const States: Story = {
  render: () => (
    <>
      <Tags>
        <Tag type="link">Hover me</Tag>
        <Tag type="button">Hover me</Tag>
        <Tag hover>Hover me</Tag>
      </Tags>
      <Tags>
        <Tag rounded>Rounded</Tag>
      </Tags>
      <Tags>
        <Tag type="link" delete />
      </Tags>
    </>
  ),
  play: async ({ canvas }) => {
    const hoverableTags = await canvas.getAllByText('Hover me')
    const roundedTag = await canvas.getByText('Rounded')
    const deleteTag = await canvas.getAllByRole('link')

    await expect(hoverableTags[0].tagName).toBe('A')
    await expect(hoverableTags[1].tagName).toBe('BUTTON')
    await expect(hoverableTags[2].tagName).toBe('SPAN')
    await expect(hoverableTags[2]).toHaveClass('is-hoverable')

    await expect(roundedTag).toHaveClass('is-rounded')

    await expect(deleteTag[1].tagName).toBe('A')
    await expect(deleteTag[1]).toHaveClass('is-delete')
  },
}

export const Combinations: Story = {
  render: () => (
    <>
      <Tags>
        <Tag type="link" color="link">Hover me</Tag>
        <Tag type="button" color="primary">Hover me</Tag>
        <Tag color="success" hover>Hover me</Tag>
        <Tag type="link" color="info">Hover me</Tag>
        <Tag type="button" color="warning">Hover me</Tag>
        <Tag color="danger" hover>Hover me</Tag>
      </Tags>
      <Tags>
        <Tag color="success">
          Bar
          <Button size="small" delete />
        </Tag>
        <Tag color="warning" size="medium">
          Hello
          <Button size="small" delete />
        </Tag>
        <Tag color="danger" size="large">
          World
          <Button delete />
        </Tag>
      </Tags>
    </>
  ),
  play: async ({ canvas }) => {
    const hoverableTags = await canvas.getAllByText('Hover me')
  },
}

export const Lists: Story = {
  render: () => (
    <Tags>
      <Tag>One</Tag>
      <Tag>Two</Tag>
      <Tag>Three</Tag>
      <Tag>Four</Tag>
      <Tag>Five</Tag>
      <Tag>Six</Tag>
      <Tag>Seven</Tag>
      <Tag>Eight</Tag>
      <Tag>Nine</Tag>
      <Tag>Ten</Tag>
      <Tag>Eleven</Tag>
      <Tag>Twelve</Tag>
      <Tag>Thirteen</Tag>
      <Tag>Fourteen</Tag>
      <Tag>Fifteen</Tag>
      <Tag>Sixteen</Tag>
      <Tag>Seventeen</Tag>
      <Tag>Eighteen</Tag>
      <Tag>Nineteen</Tag>
      <Tag>Twenty</Tag>
    </Tags>
  ),
  play: async ({ canvas }) => {
    const tags = await canvas.getAllByText(/One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|Eleven|Twelve|Thirteen|Fourteen|Fifteen|Sixteen|Seventeen|Eighteen|Nineteen|Twenty/)
    await expect(tags).toHaveLength(20)
  },
}

export const Addons: Story = {
  render: () => (
    <>
      <div>
        <Tags addons>
          <Tag>Package</Tag>
          <Tag color="primary">Bulma</Tag>
        </Tags>
      </div>
      <br />
      <div>
        <Tags addons>
          <Tag color="danger">Alex Smith</Tag>
          <Tag type="link" delete />
        </Tags>
      </div>
      <br />
      <Level
        mobile
        items={{
          left: [
            {content: (
              <Tags addons>
                <Tag color="dark">npm</Tag>
                <Tag color="info">1.0.4</Tag>
              </Tags>
            )},
            {content: (
              <Tags addons>
                <Tag color="dark">build</Tag>
                <Tag color="success">passing</Tag>
              </Tags>
            )},
            {content: (
              <Tags addons>
                <Tag color="dark">chat</Tag>
                <Tag color="primary">on gitter</Tag>
              </Tags>
            )},
          ]
        }}
      />
    </>
  ),
  play: async ({ canvas }) => {
    const tags = await canvas.getAllByText(/Package|Bulma/)
    await expect(tags).toHaveLength(2)
    await expect(tags[0].parentElement).toHaveClass('has-addons')
    await expect(tags[0].tagName).toBe('SPAN')
    await expect(tags[1].parentElement).toHaveClass('has-addons')
    await expect(tags[1]).toHaveClass('is-primary')
    await expect(tags[1].tagName).toBe('SPAN')

    const deleteTag = await canvas.getByRole('link')
    await expect(deleteTag.parentElement).toHaveClass('has-addons')
    await expect(deleteTag).toHaveClass('is-delete')
    await expect(deleteTag.tagName).toBe('A')

    const levelTags = await canvas.getAllByText(/npm|1.0.4|build|passing|chat|on gitter/)
    await expect(levelTags).toHaveLength(6)
    await expect(levelTags[0].parentElement).toHaveClass('has-addons')
    await expect(levelTags[0]).toHaveClass('is-dark')
    await expect(levelTags[0].tagName).toBe('SPAN')
    await expect(levelTags[1].parentElement).toHaveClass('has-addons')
    await expect(levelTags[1]).toHaveClass('is-info')
    await expect(levelTags[1].tagName).toBe('SPAN')
  },
}
