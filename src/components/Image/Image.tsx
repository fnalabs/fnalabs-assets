import type { FixedSize, RatioSize } from '../../types'

import React, { type FC, type ReactNode } from 'react'

export interface IImage {
  children: ReactNode
  fixedSize?: FixedSize
  ratioSize?: RatioSize
  centered?: boolean
  rounded?: boolean
}
const Image: FC<IImage> = ({ children, fixedSize, ratioSize, centered, rounded }) => {
  const fixedSizeClass = fixedSize ? ` is-${fixedSize}` : ''
  const ratioSizeClass = ratioSize ? ` is-${ratioSize}` : ''
  const centeredClass = centered ? ' mx-auto' : ''
  const roundedClass = rounded ? ' is-rounded' : ''

  return (
    <figure className={`image${fixedSizeClass}${ratioSizeClass}${centeredClass}${roundedClass}`}>
      {children}
    </figure>
  )
}
export default Image
