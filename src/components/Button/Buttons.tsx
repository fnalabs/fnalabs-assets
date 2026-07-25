import { type FC, type ReactNode } from 'react'
import type { GenericSize, TextPosition } from '../../types'

export interface IButtons {
  children: ReactNode
  position?: Exclude<TextPosition, 'left' | 'justified'>
  size?: Exclude<GenericSize, 'normal' | 'fullheight'>
  addons?: boolean
}
export const Buttons: FC<IButtons> = ({ children, position, size, addons }) => {
  const positionClass = position ? ` is-${position}` : ''
  const sizeClass = size ? ` are-${size}` : ''
  const addonsClass = addons ? ' has-addons' : ''
  const combinedClasses = `buttons${positionClass}${sizeClass}${addonsClass}`

  return <div className={combinedClasses}>{children}</div>
}
export default Buttons
