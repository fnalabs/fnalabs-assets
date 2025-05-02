import type { GenericSize } from '../../types'
import React, { FC, ReactNode } from 'react'

export interface ISection {
  /** Child content to render in the Section. */
  children: ReactNode
  /** Optional content flag to apply typography styles. */
  size?: Extract<GenericSize, 'medium' | 'large'>
}
const Section: FC<ISection> = ({ children, size }) => {
  const sizeClass = size ? ` is-${size}` : ''

  return <section className={`section${sizeClass}`}>{children}</section>
}
export default Section
