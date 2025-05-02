import type { CellPositions } from '../../types'
import React, { FC, ReactNode } from 'react'

export interface ICell {
  /** Child Cells to render in the Cell container. */
  children: ReactNode
  /** Optional cell modifier to override cell position. */
  cellPosition?: CellPositions
}
/**
 * <strong>NOTE:</strong> Cell should only contain Cell children!
 */
const Cell: FC<ICell> = ({ children, cellPosition }) => {
  const cellPositionClass = cellPosition ? ` is-${cellPosition}` : ''

  return <div className={`cell${cellPositionClass}`}>{children}</div>
}
export default Cell
