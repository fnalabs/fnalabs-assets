import type { ILink } from '../../types'
import React, { type FC, type ReactNode } from 'react'

export interface IFooter {
  children: ReactNode
}
const Footer: FC<IFooter> = ({ children }) => {
  return (
    <footer className="footer">
      {children}
    </footer>
  )
}
export default Footer
