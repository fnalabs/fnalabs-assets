import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { expect, within } from 'storybook/test'

import Grid from './Grid'
import Cell from './Cell'
import Box from '../Box/Box'

const meta = {
  title: 'Bulma/Grid',
  component: Grid,
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>
export default meta

type Story = StoryObj<typeof meta>
export const SmartGrid: Story = {
  args: {
    children: [
      <Cell>
        <Box>Cell 1</Box>
      </Cell>,
      <Cell>
        <Box>Cell 2</Box>
      </Cell>,
      <Cell>
        <Box>Cell 3</Box>
      </Cell>,
      <Cell>
        <Box>Cell 4</Box>
      </Cell>,
      <Cell>
        <Box>Cell 5</Box>
      </Cell>,
      <Cell>
        <Box>Cell 6</Box>
      </Cell>,
      <Cell>
        <Box>Cell 7</Box>
      </Cell>,
      <Cell>
        <Box>Cell 8</Box>
      </Cell>,
      <Cell>
        <Box>Cell 9</Box>
      </Cell>,
      <Cell>
        <Box>Cell 10</Box>
      </Cell>,
      <Cell>
        <Box>Cell 11</Box>
      </Cell>,
      <Cell>
        <Box>Cell 12</Box>
      </Cell>,
      <Cell>
        <Box>Cell 13</Box>
      </Cell>,
      <Cell>
        <Box>Cell 14</Box>
      </Cell>,
      <Cell>
        <Box>Cell 15</Box>
      </Cell>,
      <Cell>
        <Box>Cell 16</Box>
      </Cell>,
      <Cell>
        <Box>Cell 17</Box>
      </Cell>,
      <Cell>
        <Box>Cell 18</Box>
      </Cell>,
      <Cell>
        <Box>Cell 19</Box>
      </Cell>,
      <Cell>
        <Box>Cell 20</Box>
      </Cell>,
      <Cell>
        <Box>Cell 21</Box>
      </Cell>,
      <Cell>
        <Box>Cell 22</Box>
      </Cell>,
      <Cell>
        <Box>Cell 23</Box>
      </Cell>,
      <Cell>
        <Box>Cell 24</Box>
      </Cell>,
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const cell = canvas.getByText('Cell 1')
    await expect(cell).toBeVisible()
    await expect(cell.parentElement).toHaveClass('cell')
    await expect(cell.parentElement?.tagName).toBe('DIV')
    await expect(cell.parentElement?.parentElement).toHaveClass('grid')
    await expect(cell.parentElement?.parentElement?.tagName).toBe('DIV')

    await expect(canvas.getByText('Cell 2')).toBeVisible()
    await expect(canvas.getByText('Cell 3')).toBeVisible()
    await expect(canvas.getByText('Cell 4')).toBeVisible()
    await expect(canvas.getByText('Cell 5')).toBeVisible()
    await expect(canvas.getByText('Cell 6')).toBeVisible()
    await expect(canvas.getByText('Cell 7')).toBeVisible()
    await expect(canvas.getByText('Cell 8')).toBeVisible()
    await expect(canvas.getByText('Cell 9')).toBeVisible()
    await expect(canvas.getByText('Cell 11')).toBeVisible()
    await expect(canvas.getByText('Cell 12')).toBeVisible()
    await expect(canvas.getByText('Cell 13')).toBeVisible()
    await expect(canvas.getByText('Cell 14')).toBeVisible()
    await expect(canvas.getByText('Cell 15')).toBeVisible()
    await expect(canvas.getByText('Cell 16')).toBeVisible()
    await expect(canvas.getByText('Cell 17')).toBeVisible()
    await expect(canvas.getByText('Cell 18')).toBeVisible()
    await expect(canvas.getByText('Cell 19')).toBeVisible()
    await expect(canvas.getByText('Cell 20')).toBeVisible()
    await expect(canvas.getByText('Cell 21')).toBeVisible()
    await expect(canvas.getByText('Cell 22')).toBeVisible()
    await expect(canvas.getByText('Cell 23')).toBeVisible()
    await expect(canvas.getByText('Cell 24')).toBeVisible()
  },
}
export const FixedGrid: Story = {
  args: {
    children: [
      <Cell>
        <Box>Cell 1</Box>
      </Cell>,
      <Cell>
        <Box>Cell 2</Box>
      </Cell>,
      <Cell>
        <Box>Cell 3</Box>
      </Cell>,
      <Cell>
        <Box>Cell 4</Box>
      </Cell>,
      <Cell>
        <Box>Cell 5</Box>
      </Cell>,
      <Cell>
        <Box>Cell 6</Box>
      </Cell>,
      <Cell>
        <Box>Cell 7</Box>
      </Cell>,
      <Cell>
        <Box>Cell 8</Box>
      </Cell>,
      <Cell>
        <Box>Cell 9</Box>
      </Cell>,
      <Cell>
        <Box>Cell 10</Box>
      </Cell>,
      <Cell>
        <Box>Cell 11</Box>
      </Cell>,
      <Cell>
        <Box>Cell 12</Box>
      </Cell>,
    ],
    fixed: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const cell = canvas.getByText('Cell 1')
    await expect(cell).toBeVisible()
    await expect(cell.parentElement).toHaveClass('cell')
    await expect(cell.parentElement?.tagName).toBe('DIV')
    await expect(cell.parentElement?.parentElement).toHaveClass('grid')
    await expect(cell.parentElement?.parentElement?.tagName).toBe('DIV')
    await expect(cell.parentElement?.parentElement?.parentElement).toHaveClass('fixed-grid')
    await expect(cell.parentElement?.parentElement?.parentElement?.tagName).toBe('DIV')

    await expect(canvas.getByText('Cell 2')).toBeVisible()
    await expect(canvas.getByText('Cell 3')).toBeVisible()
    await expect(canvas.getByText('Cell 4')).toBeVisible()
    await expect(canvas.getByText('Cell 5')).toBeVisible()
    await expect(canvas.getByText('Cell 6')).toBeVisible()
    await expect(canvas.getByText('Cell 7')).toBeVisible()
    await expect(canvas.getByText('Cell 8')).toBeVisible()
    await expect(canvas.getByText('Cell 9')).toBeVisible()
    await expect(canvas.getByText('Cell 11')).toBeVisible()
    await expect(canvas.getByText('Cell 12')).toBeVisible()
  },
}
export const AutoCountFixedGrid: Story = {
  args: {
    children: [
      <Cell>
        <Box>Cell 1</Box>
      </Cell>,
      <Cell>
        <Box>Cell 2</Box>
      </Cell>,
      <Cell>
        <Box>Cell 3</Box>
      </Cell>,
      <Cell>
        <Box>Cell 4</Box>
      </Cell>,
      <Cell>
        <Box>Cell 5</Box>
      </Cell>,
      <Cell>
        <Box>Cell 6</Box>
      </Cell>,
      <Cell>
        <Box>Cell 7</Box>
      </Cell>,
      <Cell>
        <Box>Cell 8</Box>
      </Cell>,
      <Cell>
        <Box>Cell 9</Box>
      </Cell>,
      <Cell>
        <Box>Cell 10</Box>
      </Cell>,
      <Cell>
        <Box>Cell 11</Box>
      </Cell>,
      <Cell>
        <Box>Cell 12</Box>
      </Cell>,
      <Cell>
        <Box>Cell 13</Box>
      </Cell>,
      <Cell>
        <Box>Cell 14</Box>
      </Cell>,
      <Cell>
        <Box>Cell 15</Box>
      </Cell>,
      <Cell>
        <Box>Cell 16</Box>
      </Cell>,
    ],
    fixed: true,
    autoCount: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const cell = canvas.getByText('Cell 1')
    await expect(cell).toBeVisible()
    await expect(cell.parentElement).toHaveClass('cell')
    await expect(cell.parentElement?.tagName).toBe('DIV')
    await expect(cell.parentElement?.parentElement).toHaveClass('grid')
    await expect(cell.parentElement?.parentElement?.tagName).toBe('DIV')
    await expect(cell.parentElement?.parentElement?.parentElement).toHaveClass('fixed-grid')
    await expect(cell.parentElement?.parentElement?.parentElement).toHaveClass('has-auto-count')
    await expect(cell.parentElement?.parentElement?.parentElement?.tagName).toBe('DIV')

    await expect(canvas.getByText('Cell 2')).toBeVisible()
    await expect(canvas.getByText('Cell 3')).toBeVisible()
    await expect(canvas.getByText('Cell 4')).toBeVisible()
    await expect(canvas.getByText('Cell 5')).toBeVisible()
    await expect(canvas.getByText('Cell 6')).toBeVisible()
    await expect(canvas.getByText('Cell 7')).toBeVisible()
    await expect(canvas.getByText('Cell 8')).toBeVisible()
    await expect(canvas.getByText('Cell 9')).toBeVisible()
    await expect(canvas.getByText('Cell 11')).toBeVisible()
    await expect(canvas.getByText('Cell 12')).toBeVisible()
    await expect(canvas.getByText('Cell 13')).toBeVisible()
    await expect(canvas.getByText('Cell 14')).toBeVisible()
    await expect(canvas.getByText('Cell 15')).toBeVisible()
    await expect(canvas.getByText('Cell 16')).toBeVisible()
  },
}
export const ColumnStart: Story = {
  args: {
    children: [
      <Cell>
        <Box>Cell 1</Box>
      </Cell>,
      <Cell cellPosition="col-start-3">
        <Box>Cell 2</Box>
      </Cell>,
      <Cell>
        <Box>Cell 3</Box>
      </Cell>,
      <Cell>
        <Box>Cell 4</Box>
      </Cell>,
      <Cell>
        <Box>Cell 5</Box>
      </Cell>,
      <Cell>
        <Box>Cell 6</Box>
      </Cell>,
    ],
    columnCount: 4,
    fixed: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const cell = canvas.getByText('Cell 1')
    await expect(cell).toBeVisible()
    await expect(cell.parentElement).toHaveClass('cell')
    await expect(cell.parentElement?.tagName).toBe('DIV')
    await expect(cell.parentElement?.parentElement).toHaveClass('grid')
    await expect(cell.parentElement?.parentElement?.tagName).toBe('DIV')
    await expect(cell.parentElement?.parentElement?.parentElement).toHaveClass('fixed-grid')
    await expect(cell.parentElement?.parentElement?.parentElement).toHaveClass('has-4-cols')
    await expect(cell.parentElement?.parentElement?.parentElement?.tagName).toBe('DIV')

    await expect(canvas.getByText('Cell 2')).toBeVisible()
    await expect(canvas.getByText('Cell 2').parentElement).toHaveClass('is-col-start-3')

    await expect(canvas.getByText('Cell 3')).toBeVisible()
    await expect(canvas.getByText('Cell 4')).toBeVisible()
    await expect(canvas.getByText('Cell 5')).toBeVisible()
    await expect(canvas.getByText('Cell 6')).toBeVisible()
  },
}
export const ColumnFromEnd: Story = {
  args: {
    children: [
      <Cell>
        <Box>Cell 1</Box>
      </Cell>,
      <Cell cellPosition="col-from-end-2">
        <Box>Cell 2</Box>
      </Cell>,
      <Cell>
        <Box>Cell 3</Box>
      </Cell>,
      <Cell>
        <Box>Cell 4</Box>
      </Cell>,
      <Cell>
        <Box>Cell 5</Box>
      </Cell>,
      <Cell>
        <Box>Cell 6</Box>
      </Cell>,
    ],
    columnCount: 4,
    fixed: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Cell 1')).toBeVisible()

    await expect(canvas.getByText('Cell 2')).toBeVisible()
    await expect(canvas.getByText('Cell 2').parentElement).toHaveClass('is-col-from-end-2')

    await expect(canvas.getByText('Cell 3')).toBeVisible()
    await expect(canvas.getByText('Cell 4')).toBeVisible()
    await expect(canvas.getByText('Cell 5')).toBeVisible()
    await expect(canvas.getByText('Cell 6')).toBeVisible()
  },
}
export const ColumnSpan: Story = {
  args: {
    children: [
      <Cell>
        <Box>Cell 1</Box>
      </Cell>,
      <Cell cellPosition="col-span-2">
        <Box>Cell 2</Box>
      </Cell>,
      <Cell>
        <Box>Cell 3</Box>
      </Cell>,
      <Cell>
        <Box>Cell 4</Box>
      </Cell>,
      <Cell>
        <Box>Cell 5</Box>
      </Cell>,
      <Cell>
        <Box>Cell 6</Box>
      </Cell>,
    ],
    columnCount: 4,
    fixed: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Cell 1')).toBeVisible()

    await expect(canvas.getByText('Cell 2')).toBeVisible()
    await expect(canvas.getByText('Cell 2').parentElement).toHaveClass('is-col-span-2')

    await expect(canvas.getByText('Cell 3')).toBeVisible()
    await expect(canvas.getByText('Cell 4')).toBeVisible()
    await expect(canvas.getByText('Cell 5')).toBeVisible()
    await expect(canvas.getByText('Cell 6')).toBeVisible()
  },
}
export const RowStart: Story = {
  args: {
    children: [
      <Cell>
        <Box>Cell 1</Box>
      </Cell>,
      <Cell cellPosition="row-start-3">
        <Box>Cell 2</Box>
      </Cell>,
      <Cell>
        <Box>Cell 3</Box>
      </Cell>,
      <Cell>
        <Box>Cell 4</Box>
      </Cell>,
      <Cell>
        <Box>Cell 5</Box>
      </Cell>,
      <Cell>
        <Box>Cell 6</Box>
      </Cell>,
    ],
    columnCount: 4,
    fixed: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Cell 1')).toBeVisible()

    await expect(canvas.getByText('Cell 2')).toBeVisible()
    await expect(canvas.getByText('Cell 2').parentElement).toHaveClass('is-row-start-3')

    await expect(canvas.getByText('Cell 3')).toBeVisible()
    await expect(canvas.getByText('Cell 4')).toBeVisible()
    await expect(canvas.getByText('Cell 5')).toBeVisible()
    await expect(canvas.getByText('Cell 6')).toBeVisible()
  },
}
export const RowFromEnd: Story = {
  args: {
    children: [
      <Cell>
        <Box>Cell 1</Box>
      </Cell>,
      <Cell cellPosition="row-from-end-1">
        <Box>Cell 2</Box>
      </Cell>,
      <Cell>
        <Box>Cell 3</Box>
      </Cell>,
      <Cell>
        <Box>Cell 4</Box>
      </Cell>,
      <Cell>
        <Box>Cell 5</Box>
      </Cell>,
      <Cell>
        <Box>Cell 6</Box>
      </Cell>,
    ],
    columnCount: 4,
    fixed: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Cell 1')).toBeVisible()

    await expect(canvas.getByText('Cell 2')).toBeVisible()
    await expect(canvas.getByText('Cell 2').parentElement).toHaveClass('is-row-from-end-1')

    await expect(canvas.getByText('Cell 3')).toBeVisible()
    await expect(canvas.getByText('Cell 4')).toBeVisible()
    await expect(canvas.getByText('Cell 5')).toBeVisible()
    await expect(canvas.getByText('Cell 6')).toBeVisible()
  },
}
export const RowSpan: Story = {
  args: {
    children: [
      <Cell>
        <Box>Cell 1</Box>
      </Cell>,
      <Cell cellPosition="row-span-2">
        <div className="py-3 px-4 has-background-primary has-text-primary-invert has-radius-normal is-row-span-2" style={{ height: '100%' }}>Cell 2</div>
      </Cell>,
      <Cell>
        <Box>Cell 3</Box>
      </Cell>,
      <Cell>
        <Box>Cell 4</Box>
      </Cell>,
      <Cell>
        <Box>Cell 5</Box>
      </Cell>,
      <Cell>
        <Box>Cell 6</Box>
      </Cell>,
    ],
    columnCount: 4,
    fixed: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Cell 1')).toBeVisible()

    await expect(canvas.getByText('Cell 2')).toBeVisible()
    await expect(canvas.getByText('Cell 2').parentElement).toHaveClass('is-row-span-2')

    await expect(canvas.getByText('Cell 3')).toBeVisible()
    await expect(canvas.getByText('Cell 4')).toBeVisible()
    await expect(canvas.getByText('Cell 5')).toBeVisible()
    await expect(canvas.getByText('Cell 6')).toBeVisible()
  },
}
