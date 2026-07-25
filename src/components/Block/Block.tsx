import { type FC, type ReactNode } from 'react'

export interface IBlock {
  /** Child content to render in the Block. */
  children: ReactNode
  /** Optional prop for article element. */
  article?: boolean
  /** Optional prop for content modifier. */
  content?: boolean
}
const Block: FC<IBlock> = ({ children, article, content }) => {
  const blockClasses = `block${content ? ' content' : ''}`

  return article
    ? <article className={blockClasses}>{children}</article>
    : <div className={blockClasses}>{children}</div>
}
export default Block
