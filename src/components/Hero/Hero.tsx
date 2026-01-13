import type { Color, GenericSize } from '../../types'
import React, { FC, ReactNode } from 'react'

export interface IHero {
  /** Child content to render in the Hero. */
  children: ReactNode
  /** Optional flag to toggle the bold experience. */
  bold?: boolean
  /** Optional flag to center the content. */
  centered?: boolean
  /** Optional custom CSS class name(s) to add to the Hero. */
  className?: string
  /** Optional color setting for the Hero. */
  color?: Exclude<Color, 'text' | 'ghost'>
  /** Optional footer content for the Hero. */
  footer?: ReactNode
  /** Optional size setting for the Hero. */
  size?: GenericSize
}
const Hero: FC<IHero> = ({ children, bold, centered, className, color, footer, size }) => {
  const boldClass = bold ? ' is-bold' : ''
  const centeredClass = centered ? ' has-text-centered' : ''
  const colorClass = color ? ` is-${color}` : ''
  const sizeClass = size ? ` is-${size}` : ''
  const customClasses = className ? ` ${className}` : ''

  return (
    <section className={`hero${boldClass}${colorClass}${sizeClass}${customClasses}`}>
      <div className={`hero-body${centeredClass}`}>{children}</div>
      {footer && <div className={`hero-foot${centeredClass}`}>{footer}</div>}
    </section>
  )
}
export default Hero
