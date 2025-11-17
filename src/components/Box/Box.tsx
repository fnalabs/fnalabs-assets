import React, { FC, ReactNode } from 'react'

export interface IBox {
  /** Child Columns to render in the Columns container. */
  children: ReactNode
}
const Box: FC<IBox> = ({ children }) => <div className='box'>{children}</div>
export default Box
