import type { GenericSize } from '../../types'
import React, { type FC, type ReactNode } from 'react'

const faSizes = {
  small: 'sm',
  medium: 'lg',
  large: '2x',
}

export interface IIcon {
  name?: string
  style?: string
  size?: Exclude<GenericSize, 'normal' | 'fullheight'>
  children?: ReactNode | string
  wrapper?: boolean
}
const Icon: FC<IIcon> = ({ name, style, size, children, wrapper }) => {
  const sizeClass = size ? ` is-${size}` : ''
  const faSizeClass = size ? ` fa-${faSizes[size]}` : ''

  if (wrapper) return (<span className={`icon${sizeClass}`}>{children}</span>)

  return children
    ? (
    <span className="icon-text">
      <span className={`icon${sizeClass}`}>
        <i className={`fa-${style} fa-${name}${faSizeClass}`} />
      </span>
      <span>{children}</span>
    </span>
  )
    : (
    <span className={`icon${sizeClass}`}>
        <i className={`fa-${style} fa-${name}${faSizeClass}`} />
    </span>
  )
}
export default Icon
