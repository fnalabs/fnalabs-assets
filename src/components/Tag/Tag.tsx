import type { FC, ReactNode } from 'react'
import type { Color, GenericSize, TagType } from '../../types'

export interface ITag {
  children: ReactNode
  color?: Exclude<Color, 'text' | 'ghost'>
  size?: Exclude<GenericSize, 'small' | 'fullheight'>
  type?: TagType
  light?: boolean
  rounded?: boolean
  delete?: boolean
  onClick?: () => void
}
export const Tag: FC<ITag> = ({ children, color, light, size, type, rounded, delete: isDelete, onClick }) => {
  const colorClass = color ? ` is-${color}` : ''
  const lightClass = light ? ' is-light' : ''
  const sizeClass = size ? ` is-${size}` : ''
  const roundedClass = rounded ? ' is-rounded' : ''
  const deleteClass = isDelete ? ' is-delete' : ''

  switch (type) {
    case 'link':
      return (
        <a className={`tag${colorClass}${lightClass}${sizeClass}${roundedClass}`} onClick={onClick}>
          {children}
        </a>
      )
    case 'button':
      return (
        <button className={`tag${colorClass}${lightClass}${sizeClass}${roundedClass}`} onClick={onClick}>
          {children}
        </button>
      )
    default:
      return (
        <span className={`tag${colorClass}${lightClass}${sizeClass}${roundedClass}`}>{children}</span>
      )
  }
}
export default Tag