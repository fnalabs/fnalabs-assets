import type { FixedSize, RatioSize } from '../../types'

import React, { type FC, type ReactNode } from 'react'

export interface IImage {
  children: ReactNode
  fixedSize?: FixedSize
  ratioSize?: RatioSize
  centered?: boolean
  hcentered?: boolean
}
const Image: FC<IImage> = ({ children, fixedSize, ratioSize, centered, hcentered }) => {
  const fixedSizeClass = fixedSize ? ` is-${fixedSize}` : ''
  const ratioSizeClass = ratioSize ? ` is-${ratioSize}` : ''
  const centeredClass = centered ? ' mx-auto' : ''
  const hcenteredClass = hcentered ? ' is-flex is-align-items-end' : ''

  return (
    <figure className={`image${fixedSizeClass}${ratioSizeClass}${centeredClass}${hcenteredClass}`}>
      {children}
    </figure>
  )
}
export default Image
