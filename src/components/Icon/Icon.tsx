import type { FC, ReactNode } from 'react'
import type { GenericSize, Color } from '../../types'

const faSizes = {
  small: 'sm',
  medium: 'lg',
  large: '2x',
}

export interface IIcon {
  /** Optional color for the Icon. */
  color?: Color
  /** Optional Font Awesome name for the Icon. */
  name?: string
  /** Optional Font Awesome style for the Icon. */
  style?: string
  /** Optional size for the Icon. */
  size?: Exclude<GenericSize, 'normal' | 'fullheight'>
  /** Optional child nodes for the Icon. */
  children?: ReactNode | string
  /** Optional wrapper for a custom Icon. */
  wrapper?: boolean
}
const Icon: FC<IIcon> = ({ color, name, style, size, children, wrapper }) => {
  const colorClass = color ? ` has-text-${color}` : ''
  const sizeClass = size ? ` is-${size}` : ''
  const faSizeClass = size ? ` fa-${faSizes[size]}` : ''

  if (wrapper) return (<span className={`icon${sizeClass}`}>{children}</span>)

  return children
    ? (
    <span className={`icon-text${colorClass}`}>
      <span className={`icon${sizeClass}`}>
        <i className={`fa-${style} fa-${name}${faSizeClass}`} />
      </span>
      <span>{children}</span>
    </span>
  )
    : (
    <span className={`icon${colorClass}${sizeClass}`}>
      <i className={`fa-${style} fa-${name}${faSizeClass}`} />
    </span>
  )
}
export default Icon
