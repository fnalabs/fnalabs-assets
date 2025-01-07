import { NumericSize } from '../../types'
import React, { FC, ReactNode } from 'react'

type TileKind = 'ancestor' | 'parent' | 'child'

export interface ITile {
  /** Child content to render in the Tile. */
  children: ReactNode
  centered?: boolean
  centeredMobile?: boolean
  className?: string
  content?: boolean
  kind?: TileKind
  size?: NumericSize
  vertical?: boolean
}
const Tile: FC<ITile> = ({ centered, centeredMobile, children, className, content, kind, size, vertical }) => {
  const tileClass = kind === 'ancestor' ? 'grid' : kind === 'parent' ? 'cell' : ''
  const sizeClass = size ? ` is-${size}` : ''
  const verticalClass = vertical ? ' is-vertical' : ''
  const centeredClass = centered ? ' has-text-centered' : ''
  const centeredMobileClass = centeredMobile ? ' has-text-centered-mobile' : ''
  const contentClass = content ? ' content' : ''
  const customClasses = className ? ` ${className}` : ''

  return (
    <div
      className={`${tileClass}${sizeClass}${verticalClass}${centeredClass}${centeredMobileClass}${contentClass}${customClasses}`}
    >
      {children}
    </div>
  )
}
export default Tile
