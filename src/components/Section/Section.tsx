import type { GenericSize } from '../../types'
import React, { FC, ReactNode } from 'react'

export interface ISection {
  /** Child content to render in the Section. */
  children: ReactNode
  /** Optional content flag to apply typography styles. */
  size?: Extract<GenericSize, 'medium' | 'large'>
  /** Optional flag to use article tag instead of section. */
  article?: boolean
  content?: boolean
}
const Section: FC<ISection> = ({ children, size, article, content }) => {
  const sizeClass = size ? ` is-${size}` : ''
  const contentClass = content ? ' content' : ''

  return article
    ? <article className={`section${sizeClass}${contentClass}`}>{children}</article>
    : <section className={`section${sizeClass}${contentClass}`}>{children}</section>
}
export default Section
