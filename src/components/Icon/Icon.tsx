import type { GenericSize } from '../../types'
import React, { FC } from 'react'

const faSizes = {
  small: 'sm',
  medium: 'lg',
  large: '2x',
}

export interface IIcon {
  name: string
  style: string
  size?: Exclude<GenericSize, 'fullheight'>
  children?: string
}
const Icon: FC<IIcon> = ({ name, style, size, children }) => {
  const sizeClass = size ? ` is-${size}` : ''
  const faSizeClass = size ? ` fa-${faSizes[size]}` : ''

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
