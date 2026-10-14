import type { FC, ReactNode } from 'react'
import type { GenericSize } from '../../types'

export interface ITags {
  children: ReactNode
  size?: Exclude<GenericSize, 'small' | 'fullheight'>
  addons?: boolean
}
const Tags: FC<ITags> = ({ children, size, addons }) => {
  const sizeClass = size ? ` are-${size}` : ''
  const addonsClass = addons ? ' has-addons' : ''

  return (
    <div className={`tags${sizeClass}${addonsClass}`}>
      {children}
    </div>
  )
}
export default Tags
