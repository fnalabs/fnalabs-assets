import React, { FC, ReactNode } from 'react'

export interface IContainer {
  /** Child content to render in the Container. */
  children: ReactNode
  /** Optional content flag to apply typography styles. */
  content?: boolean
}
const Container: FC<IContainer> = ({ children, content }) => (
  <div className={`container${content ? ' content' : ''}`}>{children}</div>
)
export default Container
