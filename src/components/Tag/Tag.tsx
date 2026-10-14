import type { FC, ReactNode } from 'react'
import type { Color, GenericSize, TagType } from '../../types'
import { Link } from 'react-router'

export interface ITag {
  children?: ReactNode
  color?: Exclude<Color, 'text' | 'ghost'>
  size?: Exclude<GenericSize, 'small' | 'fullheight'>
  type?: TagType
  href?: string
  hover?: boolean
  light?: boolean
  rounded?: boolean
  delete?: boolean
  onClick?: () => void
}
export const Tag: FC<ITag> = ({ children, color, size, type, href, hover, light, rounded, delete: isDelete, onClick }) => {
  const colorClass = color ? ` is-${color}` : ''
  const hoverClass = hover ? ' is-hoverable' : ''
  const lightClass = light ? ' is-light' : ''
  const sizeClass = size ? ` is-${size}` : ''
  const roundedClass = rounded ? ' is-rounded' : ''
  const classes = !isDelete
    ? `tag${colorClass}${hoverClass}${lightClass}${sizeClass}${roundedClass}`
    : 'tag is-delete'

  switch (type) {
    case 'link':
      return (
        <Link to={href || '#'} className={classes} onClick={onClick}>
          {children}
        </Link>
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
