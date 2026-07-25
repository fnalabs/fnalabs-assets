import type { FC, ReactNode } from 'react'
import type { BreakpointContainer } from '../../types'

export interface IContainer {
  /** Child content to render in the Container. */
  children: ReactNode
  /** Optional content flag to apply typography styles. */
  content?: boolean
  size?: BreakpointContainer
  fluid?: boolean
}
const Container: FC<IContainer> = ({ children, content, size, fluid }) => {
  const sizeClass = size ? ` is-${size}` : ''
  const fluidClass = fluid ? ' is-fluid' : ''
  const combinedClasses = `${content ? ' content' : ''}${fluid ? fluidClass : sizeClass}`

  return (
    <div className={`container${combinedClasses}`}>
      {children}
    </div>
  )
}
export default Container
