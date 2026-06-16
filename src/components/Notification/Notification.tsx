import type { Color } from '../../types'
import React, { type FC, type ReactNode } from 'react'

export interface INotification {
  children: ReactNode
  color?: Exclude<Color, 'text' | 'ghost'>
  light?: boolean
  close?: boolean
  onClose?: () => void
}
const Notification: FC<INotification> = ({ children, color, light, close, onClose }) => {
  const colorClass = color ? ` is-${color}` : ''
  const lightClass = light ? ' is-light' : ''

  return (
    <div className={`notification${colorClass}${lightClass}`}>
      {close && <button className='delete' onClick={onClose} />}
      {children}
    </div>
  )
}
export default Notification
