import { type FC, type ReactNode } from 'react'
import type { GenericSize, TextPosition } from '../../types'

export interface IButtons {
  /**
   * The content to display within the Buttons container.<br />
   * <code>NOTE: should be a Button component only!</code>
   */
  children: ReactNode
  /** Optional position for the Buttons container. */
  position?: Exclude<TextPosition, 'left' | 'justified'>
  /** Optional size for the Buttons container. */
  size?: Exclude<GenericSize, 'normal' | 'fullheight'>
  /** Optional flag to apply button addons styling. */
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
