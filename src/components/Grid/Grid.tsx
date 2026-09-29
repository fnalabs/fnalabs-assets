import type { FC, ReactNode } from 'react'
import type { GapSize, MinimumSize, NumericSize, GridNumericSizes } from '../../types'

export interface IGrid {
  /** Child Cells to render in the Grid container. */
  children: ReactNode
  /** Optional grid modifier for minimum column width. */
  minimumSize?: MinimumSize
  /** Optional number of columns to set for the grid */
  columnCount?: NumericSize | GridNumericSizes[]
  /** Optional grid modifier for column gap size. */
  colGapSize?: GapSize
  /** Optional grid modifier for row gap size. */
  rowGapSize?: GapSize
  /** Optional grid modifier for Auto Count Fixed Grid experiences. */
  autoCount?: boolean
  /** Optional grid modifier for Fixed Grid experiences. */
  fixed?: boolean
}
/**
 * <strong>NOTE:</strong> Grid should only contain Cell children!
 */
const Grid: FC<IGrid> = ({ children, minimumSize, columnCount, colGapSize, rowGapSize, autoCount, fixed }) => {
  const typeClass = autoCount ? 'fixed-grid has-auto-count' : fixed ? 'fixed-grid' : ''
  const columnCountClass = Array.isArray(columnCount)
    ? columnCount.reduce((className, count) => (className += ` has-${count}`), '')
    : columnCount
      ? ` has-${columnCount}-cols`
      : ''
  const minimumSizeClass = minimumSize ? ` is-col-min-${minimumSize}` : ''
  const colGapSizeClass = colGapSize ? ` is-column-gap-${colGapSize}` : ''
  const rowGapSizeClass = rowGapSize ? ` is-row-gap-${rowGapSize}` : ''

  return fixed ? (
    <div className={`${typeClass}${columnCountClass}`}>
      <div className={`grid${minimumSizeClass}${colGapSizeClass}${rowGapSizeClass}`}>{children}</div>
    </div>
  ) : (
    <div className={`grid${minimumSizeClass}${colGapSizeClass}${rowGapSizeClass}`}>{children}</div>
  )
}
export default Grid
