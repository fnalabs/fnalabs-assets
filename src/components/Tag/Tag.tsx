import type { FC, ReactNode } from 'react'
import type { Color, GenericSize, TagType } from '../../types'

export interface ITag {
  children?: ReactNode
  color?: Exclude<Color, 'text' | 'ghost'>
  size?: Exclude<GenericSize, 'small' | 'fullheight'>
  type?: TagType
  hover?: boolean
  light?: boolean
  rounded?: boolean
  delete?: boolean
  onClick?: () => void
}
export const Tag: FC<ITag> = ({ children, color, hover, light, size, type, rounded, delete: isDelete, onClick }) => {
  const colorClass = color ? ` is-${color}` : ''
  const hoverClass = hover ? ' is-hoverable' : ''
  const lightClass = light ? ' is-light' : ''
  const sizeClass = size ? ` is-${size}` : ''
  const roundedClass = rounded ? ' is-rounded' : ''

  const classes = isDelete
    ? 'tag is-delete'
    : `tag${colorClass}${hoverClass}${lightClass}${sizeClass}${roundedClass}`

  switch (type) {
    case 'link':
      return (
        <a className={classes} onClick={onClick}>
          {children}
        </a>
      )
    case 'button':
      return (
        <button className={classes} onClick={onClick}>
          {children}
        </button>
      )
    default:
      return (
        <span className={classes}>{children}</span>
      )
  }
}
export default Tag
