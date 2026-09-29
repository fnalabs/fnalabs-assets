import type { Color } from '../../types'
import React, { type FC, type ReactNode } from 'react'

export interface INotification {
  /** Content for the Notification experience. */
  children: ReactNode
  /** Optional color for the Notification. */
  color?: Exclude<Color, 'text' | 'ghost'>
  /** Optional light variant colors for the Notification. */
  light?: boolean
  /** Optional close button for the Notification. */
  close?: boolean
  /** Optional callback function for when the close button is clicked. */
  onClose?: () => void
}
const Notification: FC<INotification> = ({ children, color, light, close, onClose }) => {
  const colorClass = color ? ` is-${color}` : ''
  const lightClass = light ? ' is-light' : ''

  return (
    <div className={`notification${colorClass}${lightClass}`}>
      {children}
      {close && <button className='delete' onClick={onClose} />}
    </div>
  )
}
export default Notification
