import { IntRange } from 'type-fest'

export type Breakpoint =
  | 'mobile'
  | 'tablet'
  | 'tablet-only'
  | 'desktop'
  | 'desktop-only'
  | 'widescreen'
  | 'widescreen-only'
  | 'fullhd'
  | 'touch'
  | 'until-widescreen'
  | 'until-fullhd'
export type BreakpointColumn = Extract<Breakpoint, 'mobile' | 'tablet' | 'desktop' | 'widescreen' | 'fullhd'>

export type Color =
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'black'
  | 'light'
  | 'dark'
  | 'white'
  | 'transparent'

export type FixedPosition = 'top' | 'bottom'

export type ButtonStyle = 'outlined' | 'inverted' | 'loading' | 'static'
export type FractionSize =
  | 'one-fifth'
  | 'one-quarter'
  | 'one-third'
  | 'two-fifths'
  | 'half'
  | 'three-fifths'
  | 'two-thirds'
  | 'three-quarters'
  | 'four-fifths'
  | 'full'
export type FractionSizes = `${FractionSize}-${BreakpointColumn}`
export type GapSize = IntRange<0, 9>
export type GapSizes = `${GapSize}-${BreakpointColumn}`
export type GenericSize = 'small' | 'medium' | 'large' | 'fullheight'
export type HeadingSize = IntRange<1, 7>
export type MinimumSize = IntRange<0, 33>
export type NumericSize = IntRange<1, 13>
export type NumericSizes = `${NumericSize}-${BreakpointColumn}`

export type CellPosition = 'col-start' | 'col-from-end' | 'col-span' | 'row-start' | 'row-from-end' | 'row-span'
export type CellPositions = `${CellPosition}-${NumericSize}`
export type TextPosition = 'left' | 'right' | 'centered' | 'justified'
export type TextPositions = `${TextPosition}-${Breakpoint}`

export interface ILink {
  label: string
  href: string
}
