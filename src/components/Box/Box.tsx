import React, { FC, ReactNode } from 'react'

export interface IBox {
  /** Child Columns to render in the Columns container. */
  children: ReactNode
  fullheight?: boolean
}
const Box: FC<IBox> = ({ children, fullheight }) => <div className={`box${fullheight ? ' is-fullheight' : ''}`}>{children}</div>
export default Box
