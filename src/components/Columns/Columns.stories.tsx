import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'

import Columns from './Columns'
import Column from './Column'
import Box from '../Box/Box'

const meta = {
  title: 'Bulma/Columns',
  component: Columns,
  subcomponents: { Column },
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

    const box = canvas.getByText('example')
    await expect(box).toBeVisible()

    await expect(box.parentElement).toHaveClass('column')
    await expect(box.parentElement?.tagName).toBe('DIV')

    await expect(box.parentElement?.parentElement).toHaveClass('columns')
    await expect(box.parentElement?.parentElement?.tagName).toBe('DIV')
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
    await expect(canvas.getByText('example').parentElement?.parentElement).toHaveClass('is-mobile')
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

    const columns = canvas.getByText('example').parentElement?.parentElement
    await expect(columns).toHaveClass('columns')
    await expect(columns).toHaveClass('is-mobile')
    await expect(columns).toHaveClass('is-centered')
    await expect(columns).toHaveClass('is-gapless')
    await expect(columns).toHaveClass('is-multiline')
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
    await expect(canvas.getByText('is-full').parentElement).toHaveClass('is-full')
    await expect(canvas.getByText('is-four-fifths')).toBeVisible()
    await expect(canvas.getByText('is-four-fifths').parentElement).toHaveClass('is-four-fifths')
    await expect(canvas.getByText('is-three-quarters')).toBeVisible()
    await expect(canvas.getByText('is-three-quarters').parentElement).toHaveClass('is-three-quarters')
    await expect(canvas.getByText('is-two-thirds')).toBeVisible()
    await expect(canvas.getByText('is-two-thirds').parentElement).toHaveClass('is-two-thirds')
    await expect(canvas.getByText('is-three-fifths')).toBeVisible()
    await expect(canvas.getByText('is-three-fifths').parentElement).toHaveClass('is-three-fifths')
    await expect(canvas.getByText('is-half')).toBeVisible()
    await expect(canvas.getByText('is-half').parentElement).toHaveClass('is-half')
    await expect(canvas.getByText('is-two-fifths')).toBeVisible()
    await expect(canvas.getByText('is-two-fifths').parentElement).toHaveClass('is-two-fifths')
    await expect(canvas.getByText('is-one-third')).toBeVisible()
    await expect(canvas.getByText('is-one-third').parentElement).toHaveClass('is-one-third')
    await expect(canvas.getByText('is-one-quarter')).toBeVisible()
    await expect(canvas.getByText('is-one-quarter').parentElement).toHaveClass('is-one-quarter')
    await expect(canvas.getByText('is-one-fifth')).toBeVisible()
    await expect(canvas.getByText('is-one-fifth').parentElement).toHaveClass('is-one-fifth')
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
    await expect(canvas.getByText('is-12').parentElement).toHaveClass('is-12')
    await expect(canvas.getByText('is-11')).toBeVisible()
    await expect(canvas.getByText('is-11').parentElement).toHaveClass('is-11')
    await expect(canvas.getByText('is-10')).toBeVisible()
    await expect(canvas.getByText('is-10').parentElement).toHaveClass('is-10')
    await expect(canvas.getByText('is-9')).toBeVisible()
    await expect(canvas.getByText('is-9').parentElement).toHaveClass('is-9')
    await expect(canvas.getByText('is-8')).toBeVisible()
    await expect(canvas.getByText('is-8').parentElement).toHaveClass('is-8')
    await expect(canvas.getByText('is-7')).toBeVisible()
    await expect(canvas.getByText('is-7').parentElement).toHaveClass('is-7')
    await expect(canvas.getByText('is-6')).toBeVisible()
    await expect(canvas.getByText('is-6').parentElement).toHaveClass('is-6')
    await expect(canvas.getByText('is-5')).toBeVisible()
    await expect(canvas.getByText('is-5').parentElement).toHaveClass('is-5')
    await expect(canvas.getByText('is-4')).toBeVisible()
    await expect(canvas.getByText('is-4').parentElement).toHaveClass('is-4')
    await expect(canvas.getByText('is-3')).toBeVisible()
    await expect(canvas.getByText('is-3').parentElement).toHaveClass('is-3')
    await expect(canvas.getByText('is-2')).toBeVisible()
    await expect(canvas.getByText('is-2').parentElement).toHaveClass('is-2')
    await expect(canvas.getByText('1')).toBeVisible()
    await expect(canvas.getByText('1').parentElement).toHaveClass('is-1')
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
    await expect(canvas.getByText('is-half').parentElement?.parentElement).toHaveClass('is-half')
    await expect(canvas.getByText('is-half').parentElement?.parentElement).toHaveClass('is-offset-one-quarter')

    await expect(canvas.getByText('is-three-fifths')).toBeVisible()
    await expect(canvas.getByText('is-offset-one-fifth')).toBeVisible()
    await expect(canvas.getByText('is-three-fifths').parentElement?.parentElement).toHaveClass('is-three-fifths')
    await expect(canvas.getByText('is-three-fifths').parentElement?.parentElement).toHaveClass('is-offset-one-fifth')

    await expect(canvas.getByText('is-4')).toBeVisible()
    await expect(canvas.getByText('is-offset-8')).toBeVisible()
    await expect(canvas.getByText('is-4').parentElement?.parentElement).toHaveClass('is-4')
    await expect(canvas.getByText('is-4').parentElement?.parentElement).toHaveClass('is-offset-8')

    await expect(canvas.getByText('is-11')).toBeVisible()
    await expect(canvas.getByText('is-offset-1')).toBeVisible()
    await expect(canvas.getByText('is-11').parentElement?.parentElement).toHaveClass('is-11')
    await expect(canvas.getByText('is-11').parentElement?.parentElement).toHaveClass('is-offset-1')
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

    const narrowColumn = canvas.getByText('Narrow Column with more content to highlight additional vertical alignment')
    await expect(narrowColumn).toBeVisible()
    await expect(narrowColumn.parentElement?.parentElement).toHaveClass('is-narrow')

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

    const narrowColumn = canvas.getByText('Narrow Column with more content to highlight additional vertical alignment')
    await expect(narrowColumn).toBeVisible()
    await expect(narrowColumn.parentElement?.parentElement).toHaveClass('is-narrow-desktop')

    await expect(canvas.getByText('Flexible Column')).toBeVisible()

    await expect(canvas.getByText('is-three-quarters-mobile')).toBeVisible()
    await expect(canvas.getByText('is-three-quarters-mobile').parentElement?.parentElement).toHaveClass('is-three-quarters-mobile')
    await expect(canvas.getByText('is-two-thirds-tablet')).toBeVisible()
    await expect(canvas.getByText('is-two-thirds-tablet').parentElement?.parentElement).toHaveClass('is-two-thirds-tablet')
    await expect(canvas.getByText('is-half-desktop')).toBeVisible()
    await expect(canvas.getByText('is-half-desktop').parentElement?.parentElement).toHaveClass('is-half-desktop')
    await expect(canvas.getByText('is-one-third-widescreen')).toBeVisible()
    await expect(canvas.getByText('is-one-third-widescreen').parentElement?.parentElement).toHaveClass('is-one-third-widescreen')
    await expect(canvas.getByText('is-one-quarter-fullhd')).toBeVisible()
    await expect(canvas.getByText('is-one-quarter-fullhd').parentElement?.parentElement).toHaveClass('is-one-quarter-fullhd')
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

    const columns = canvas.getAllByText('Column')[0].parentElement?.parentElement
    await expect(columns).toHaveClass('is-1-mobile')
    await expect(columns).toHaveClass('is-0-tablet')
    await expect(columns).toHaveClass('is-3-desktop')
    await expect(columns).toHaveClass('is-8-widescreen')
    await expect(columns).toHaveClass('is-2-fullhd')
  },
}
