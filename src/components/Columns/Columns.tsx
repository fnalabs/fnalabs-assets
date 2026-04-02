import type { Breakpoint, GapSize, GapSizes } from '../../types'
import React, { FC, ReactNode } from 'react'

export interface IColumns {
  /** Child Columns to render in the Columns container. */
  children: ReactNode
  /** Optional Breakpoint to force columns to render at. */
  breakpoint?: Extract<Breakpoint, 'mobile' | 'desktop'>
  /** Optional setting for Centered Column content. */
  centered?: boolean
  /** Optional setting for specific gap settings on Columns. */
  gapSize?: GapSize | Array<GapSize | GapSizes>
  /** Optional setting to remove Column gaps. */
  gapless?: boolean
  /** Optional setting to enable mobile stacking. */
  mobile?: boolean
  /** Optional setting to enable Multiline Column content. */
  multiline?: boolean
  /** Optional setting to enable vertical alignment of Columns. */
  vcentered?: boolean
}
/**
 * To promote fully
 * <strong>NOTE:</strong> Columns should only contain Column children!
 */
const Columns: FC<IColumns> = ({ children, breakpoint, centered, gapSize, gapless, mobile, multiline, vcentered }) => {
  const breakpointClass = breakpoint ? ` is-${breakpoint}` : ''
  const centeredClass = centered ? ' is-centered' : ''
  const gapSizeClass = Array.isArray(gapSize)
    ? gapSize.reduce((className, size) => (className += ` is-${size}`), '')
    : gapSize
      ? ` is-${gapSize}`
      : ''
  const gaplessClass = gapless ? ' is-gapless' : ''
  const mobileClass = mobile ? ' is-mobile' : ''
  const multilineClass = multiline ? ' is-multiline' : ''
  const vcenteredClass = vcentered ? ' is-vcentered' : ''

  return (
    <div
      className={`columns${gapSizeClass}${gaplessClass}${mobileClass}${multilineClass}${breakpointClass}${centeredClass}${vcenteredClass}`}
    >
      {children}
    </div>
  )
}
export default Columns
