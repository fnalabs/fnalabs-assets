import type { Color, GenericSize } from '../../types'

import React, { type FC } from 'react'

export interface IProgressBar {
  /** Optional color for the progress bar. */
  color?: Exclude<Color, 'text' | 'ghost'>
  /** Optional size for the progress bar. */
  size?: GenericSize
  /** Optional value for the progress bar (0-100) when not indeterminate. */
  value?: number
}
const ProgressBar: FC<IProgressBar> = ({ color, size, value }) => {
  const colorClass = color ? ` is-${color}` : ''
  const sizeClass = size ? ` is-${size}` : ''

  return value
    ? <progress className={`progress${colorClass}${sizeClass}`} value={value} max='100'>{value}%</progress>
    : <progress className={`progress${colorClass}${sizeClass}`} max='100' />
}
export default ProgressBar
