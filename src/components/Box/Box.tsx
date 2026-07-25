import { FC, ReactNode } from 'react'

export interface IBox {
  /** Child content to render in the Box. */
  children: ReactNode
  /** Optional box modifier for full height. */
  fullheight?: boolean
}
const Box: FC<IBox> = ({ children, fullheight }) => <div className={`box${fullheight ? ' is-fullheight' : ''}`}>{children}</div>
export default Box
