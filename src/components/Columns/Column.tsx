import type { FC, ReactNode } from 'react'
import type {
  BreakpointColumn,
  FractionSize,
  FractionSizes,
  NumericSize,
  NumericSizes,
  TextPosition,
  TextPositions,
} from '../../types'

export interface IColumn {
  /** Optional child content to display for the Column. */
  children?: ReactNode
  /** Optional content class to apply to the Column. */
  content?: boolean
  /**
   * Optional fraction size for the Column.<br />
   * <code>NOTE: Can only be used with fraction sizes offsets.</code>
   */
  fractionSize?: FractionSize | FractionSizes | Array<FractionSize | FractionSizes>
  /**
   * Optional fraction size offset for the Column.<br />
   * <code>NOTE: Can only be used with fraction sizes.</code>
   */
  fractionSizeOffset?: FractionSize | FractionSizes | Array<FractionSize | FractionSizes>
  /** Optional setting to hide the Column on touch devices. */
  hiddenTouch?: boolean
  /**
   * Optional numeric size for the Column.<br />
   * <code>NOTE: Can only be used with numeric sizes offsets.</code>
   */
  numericSize?: NumericSize | NumericSizes | Array<NumericSize | NumericSizes>
  /**
   * Optional numeric size offset for the Column.<br />
   * <code>NOTE: Can only be used with numeric sizes.</code>
   */
  numericSizeOffset?: NumericSize | NumericSizes | Array<NumericSize | NumericSizes>
  /** Optional setting to make the Column narrow, or for certain breakpoints. */
  narrow?: boolean | BreakpointColumn[]
  /** Optional text position for the Column. */
  textPosition?: TextPosition | TextPositions | Array<TextPosition | TextPositions>
}
const Column: FC<IColumn> = ({
  children,
  content,
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

  if (hiddenTouch) return <div className="column is-hidden-touch">{children}</div>

  const contentClass = content ? ' content' : ''
  const narrowClass = Array.isArray(narrow)
    ? narrow.reduce((narrowClassName, breakpointColumn) => (narrowClassName += ` is-narrow-${breakpointColumn}`), '')
    : narrow
      ? ' is-narrow'
      : ''
  const textPositionClass = Array.isArray(textPosition)
    ? textPosition.reduce((tpClassName, tPosition) => (tpClassName += ` has-text-${tPosition}`), '')
    : textPosition
      ? ` has-text-${textPosition}`
      : ''

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
