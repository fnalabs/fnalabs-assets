import React, { type FC, type ReactNode } from 'react'

export interface IBlock {
  children: ReactNode
  article?: boolean
  content?: boolean
}
const Block: FC<IBlock> = ({ children, article, content }) => {
  const blockClasses = `block${content ? ' content' : ''}`

  return article
    ? <article className={blockClasses}>{children}</article>
    : <div className={blockClasses}>{children}</div>
}
export default Block
