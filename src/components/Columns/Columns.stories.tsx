import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'

import Columns from './Columns'
import Column from './Column'
import Box from '../Box/Box'

const meta = {
  title: 'Components/Columns',
  component: Columns,
  tags: ['autodocs'],
} satisfies Meta<typeof Columns>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {
    children: (
      <Column>
        <Box>example</Box>
      </Column>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('example')).toBeVisible()
  },
}
export const WithBreakpoint: Story = {
  args: {
    children: (
      <Column>
        <Box>example</Box>
      </Column>
    ),
    breakpoint: 'mobile',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('example')).toBeVisible()
  },
}
export const AllOptions: Story = {
  args: {
    children: (
      <Column>
        <Box>example</Box>
      </Column>
    ),
    breakpoint: 'mobile',
    centered: true,
    gapless: true,
    multiline: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('example')).toBeVisible()
  },
}
export const FractionSizes: Story = {
  args: {
    children: [
      <Column fractionSize="full">
        <Box>is-full</Box>
      </Column>,
      <Column fractionSize="four-fifths">
        <Box>is-four-fifths</Box>
      </Column>,
      <Column>
        <Box>Auto</Box>
      </Column>,
      <Column fractionSize="three-quarters">
        <Box>is-three-quarters</Box>
      </Column>,
      <Column>
        <Box>Auto</Box>
      </Column>,
      <Column fractionSize="two-thirds">
        <Box>is-two-thirds</Box>
      </Column>,
      <Column>
        <Box>Auto</Box>
      </Column>,
      <Column fractionSize="three-fifths">
        <Box>is-three-fifths</Box>
      </Column>,
      <Column>
        <Box>Auto</Box>
      </Column>,
      <Column fractionSize="half">
        <Box>is-half</Box>
      </Column>,
      <Column>
        <Box>Auto</Box>
      </Column>,
      <Column>
        <Box>Auto</Box>
      </Column>,
      <Column fractionSize="two-fifths">
        <Box>is-two-fifths</Box>
      </Column>,
      <Column>
        <Box>Auto</Box>
      </Column>,
      <Column fractionSize="one-third">
        <Box>is-one-third</Box>
      </Column>,
      <Column>
        <Box>Auto</Box>
      </Column>,
      <Column fractionSize="one-quarter">
        <Box>is-one-quarter</Box>
      </Column>,
      <Column>
        <Box>Auto</Box>
      </Column>,
      <Column fractionSize="one-fifth">
        <Box>is-one-fifth</Box>
      </Column>,
      <Column>
        <Box>Auto</Box>
      </Column>,
    ],
    multiline: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('is-full')).toBeVisible()
    await expect(canvas.getByText('is-four-fifths')).toBeVisible()
    await expect(canvas.getByText('is-three-quarters')).toBeVisible()
    await expect(canvas.getByText('is-two-thirds')).toBeVisible()
    await expect(canvas.getByText('is-three-fifths')).toBeVisible()
    await expect(canvas.getByText('is-half')).toBeVisible()
    await expect(canvas.getByText('is-two-fifths')).toBeVisible()
    await expect(canvas.getByText('is-one-third')).toBeVisible()
    await expect(canvas.getByText('is-one-quarter')).toBeVisible()
    await expect(canvas.getByText('is-one-fifth')).toBeVisible()
  },
}

export const TwelveColumnsSystem: Story = {
  args: {
    children: [
      <Column numericSize={12}>
        <Box>is-12</Box>
      </Column>,
      <Column numericSize={11}>
        <Box>is-11</Box>
      </Column>,
      <Column numericSize={1} textPosition="centered">
        <Box>1</Box>
      </Column>,
      <Column numericSize={10}>
        <Box>is-10</Box>
      </Column>,
      <Column>
        <Box>Auto</Box>
      </Column>,
      <Column numericSize={9}>
        <Box>is-9</Box>
      </Column>,
      <Column>
        <Box>Auto</Box>
      </Column>,
      <Column numericSize={8}>
        <Box>is-8</Box>
      </Column>,
      <Column>
        <Box>Auto</Box>
      </Column>,
      <Column numericSize={7}>
        <Box>is-7</Box>
      </Column>,
      <Column>
        <Box>Auto</Box>
      </Column>,
      <Column numericSize={6}>
        <Box>is-6</Box>
      </Column>,
      <Column>
        <Box>Auto</Box>
      </Column>,
      <Column>
        <Box>Auto</Box>
      </Column>,
      <Column numericSize={5}>
        <Box>is-5</Box>
      </Column>,
      <Column>
        <Box>Auto</Box>
      </Column>,
      <Column numericSize={4}>
        <Box>is-4</Box>
      </Column>,
      <Column>
        <Box>Auto</Box>
      </Column>,
      <Column numericSize={3}>
        <Box>is-3</Box>
      </Column>,
      <Column>
        <Box>Auto</Box>
      </Column>,
      <Column numericSize={2}>
        <Box>is-2</Box>
      </Column>,
      <Column>
        <Box>Auto</Box>
      </Column>,
    ],
    centered: true,
    multiline: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('is-12')).toBeVisible()
    await expect(canvas.getByText('is-11')).toBeVisible()
    await expect(canvas.getByText('is-10')).toBeVisible()
    await expect(canvas.getByText('is-9')).toBeVisible()
    await expect(canvas.getByText('is-8')).toBeVisible()
    await expect(canvas.getByText('is-7')).toBeVisible()
    await expect(canvas.getByText('is-6')).toBeVisible()
    await expect(canvas.getByText('is-5')).toBeVisible()
    await expect(canvas.getByText('is-4')).toBeVisible()
    await expect(canvas.getByText('is-3')).toBeVisible()
    await expect(canvas.getByText('is-2')).toBeVisible()
    await expect(canvas.getByText('1')).toBeVisible()
  },
}
export const Offset: Story = {
  args: {
    children: [
      <Column fractionSize="half" fractionSizeOffset="one-quarter">
        <Box>
          <p>is-half</p>
          <p>is-offset-one-quarter</p>
        </Box>
      </Column>,
      <Column fractionSize="three-fifths" fractionSizeOffset="one-fifth">
        <Box>
          <p>is-three-fifths</p>
          <p>is-offset-one-fifth</p>
        </Box>
      </Column>,
      <Column numericSize={4} numericSizeOffset={8}>
        <Box>
          <p>is-4</p>
          <p>is-offset-8</p>
        </Box>
      </Column>,
      <Column numericSize={11} numericSizeOffset={1}>
        <Box>
          <p>is-11</p>
          <p>is-offset-1</p>
        </Box>
      </Column>,
    ],
    multiline: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('is-half')).toBeVisible()
    await expect(canvas.getByText('is-offset-one-quarter')).toBeVisible()
    await expect(canvas.getByText('is-three-fifths')).toBeVisible()
    await expect(canvas.getByText('is-offset-one-fifth')).toBeVisible()
    await expect(canvas.getByText('is-4')).toBeVisible()
    await expect(canvas.getByText('is-offset-8')).toBeVisible()
    await expect(canvas.getByText('is-11')).toBeVisible()
    await expect(canvas.getByText('is-offset-1')).toBeVisible()
  },
}
export const NarrowColumn: Story = {
  args: {
    children: [
      <Column narrow content>
        <div style={{ width: '200px' }}>
          <Box>Narrow Column with more content to highlight additional vertical alignment</Box>
        </div>
      </Column>,
      <Column>
        <Box>Flexible Column</Box>
      </Column>,
    ],
    vcentered: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByText('Narrow Column with more content to highlight additional vertical alignment'),
    ).toBeVisible()
    await expect(canvas.getByText('Flexible Column')).toBeVisible()
  },
}
export const ColumnResponsiveness: Story = {
  args: {
    children: [
      <Column narrow={['desktop']}>
        <div style={{ width: '200px' }}>
          <Box>Narrow Column with more content to highlight additional vertical alignment</Box>
        </div>
      </Column>,
      <Column>
        <Box>Flexible Column</Box>
      </Column>,
      <Column
        fractionSize={[
          'three-quarters-mobile',
          'two-thirds-tablet',
          'half-desktop',
          'one-third-widescreen',
          'one-quarter-fullhd',
        ]}
      >
        <Box>
          <p>is-three-quarters-mobile</p>
          <p>is-two-thirds-tablet</p>
          <p>is-half-desktop</p>
          <p>is-one-third-widescreen</p>
          <p>is-one-quarter-fullhd</p>
        </Box>
      </Column>,
    ],
    multiline: true,
    vcentered: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByText('Narrow Column with more content to highlight additional vertical alignment'),
    ).toBeVisible()
    await expect(canvas.getByText('Flexible Column')).toBeVisible()
    await expect(canvas.getByText('is-three-quarters-mobile')).toBeVisible()
    await expect(canvas.getByText('is-two-thirds-tablet')).toBeVisible()
    await expect(canvas.getByText('is-half-desktop')).toBeVisible()
    await expect(canvas.getByText('is-one-third-widescreen')).toBeVisible()
    await expect(canvas.getByText('is-one-quarter-fullhd')).toBeVisible()
  },
}
export const ColumnsGap: Story = {
  args: {
    children: [
      <Column textPosition="centered">
        <Box>Column</Box>
      </Column>,
      <Column textPosition="centered">
        <Box>Column</Box>
      </Column>,
      <Column textPosition="centered">
        <Box>Column</Box>
      </Column>,
      <Column textPosition="centered">
        <Box>Column</Box>
      </Column>,
      <Column textPosition="centered">
        <Box>Column</Box>
      </Column>,
      <Column textPosition="centered">
        <Box>Column</Box>
      </Column>,
    ],
    gapSize: ['1-mobile', '0-tablet', '3-desktop', '8-widescreen', '2-fullhd'],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getAllByText('Column')).toHaveLength(6)
  },
}
