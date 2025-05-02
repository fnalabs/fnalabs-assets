import type {
  BreakpointColumn,
  FractionSize,
  FractionSizes,
  NumericSize,
  NumericSizes,
  TextPosition,
} from '../../types'
import React, { FC, ReactNode } from 'react'

export interface IColumn {
  children: ReactNode
  content?: boolean
  document?: boolean
  fractionSize?: FractionSize | Array<FractionSize | FractionSizes>
  fractionSizeOffset?: FractionSize | Array<FractionSize | FractionSizes>
  hiddenTouch?: boolean
  numericSize?: NumericSize | Array<NumericSize | NumericSizes>
  numericSizeOffset?: NumericSize | Array<NumericSize | NumericSizes>
  narrow?: boolean | BreakpointColumn[]
  textPosition?: TextPosition
}
const Column: FC<IColumn> = ({
  children,
  content,
  document,
  fractionSize,
  fractionSizeOffset,
  hiddenTouch,
  numericSize,
  numericSizeOffset,
  narrow,
  textPosition,
}) => {
  if ((fractionSize && numericSizeOffset) || (fractionSizeOffset && numericSize))
    throw new TypeError('Column Sizes and Offsets units of measure must match (either fractions or numeric)')

  if (document)
    return (
      <section className="column content" role="document">
        {children}
      </section>
    )
  if (hiddenTouch) return <header className="column is-narrow is-hidden-touch">{children}</header>

  const contentClass = content ? ' content' : ''
  const narrowClass = Array.isArray(narrow)
    ? narrow.reduce((narrowClassName, breakpointColumn) => (narrowClassName += ` is-narrow-${breakpointColumn}`), '')
    : narrow
      ? ' is-narrow'
      : ''
  const textPositionClass = textPosition ? ` has-text-${textPosition}` : ''

  // NOTE: prefer 12 column grid precision over fractions
  const sizeClass = Array.isArray(numericSize)
    ? numericSize.reduce((nsClassName, nSize) => (nsClassName += ` is-${nSize}`), '')
    : numericSize
      ? ` is-${numericSize}`
      : Array.isArray(fractionSize)
        ? fractionSize.reduce((fsClassName, fSize) => (fsClassName += ` is-${fSize}`), '')
        : fractionSize
          ? ` is-${fractionSize}`
          : ''

  // NOTE: prefer 12 column grid precision over fractions
  const offsetClass = Array.isArray(numericSizeOffset)
    ? numericSizeOffset.reduce((nsoClassName, noSize) => (nsoClassName += ` is-offset-${noSize}`), '')
    : numericSizeOffset
      ? ` is-offset-${numericSizeOffset}`
      : Array.isArray(fractionSizeOffset)
        ? fractionSizeOffset.reduce((fsoClassName, foSize) => (fsoClassName += ` is-offset-${foSize}`), '')
        : fractionSizeOffset
          ? ` is-offset-${fractionSizeOffset}`
          : ''

  return (
    <div className={`column${sizeClass}${offsetClass}${narrowClass}${textPositionClass}${contentClass}`}>
      {children}
    </div>
  )
}
export default Column
