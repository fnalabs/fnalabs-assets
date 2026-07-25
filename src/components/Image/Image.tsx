import type { FC, ReactNode } from 'react'
import type { FixedSize, RatioSize } from '../../types'

export interface IImage {
  /** The HTML img tag for the image you want to display. */
  children: ReactNode
  /** Optional fixed size for the image. */
  fixedSize?: FixedSize
  /** Optional ratio size for the image. */
  ratioSize?: RatioSize
  /** Whether the image should be centered horizontally and vertically. */
  centered?: boolean
  /** Whether the image should be centered horizontally. */
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
