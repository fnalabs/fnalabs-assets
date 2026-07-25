import type { ComponentType } from 'react'
import type { IntRange } from 'type-fest'

export type RemoteComponent<T> = Promise<{ default: ComponentType<T> }>

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
export type BreakpointContainer = Extract<Breakpoint, 'widescreen' | 'fullhd'> | `max-${Extract<Breakpoint, 'tablet' | 'desktop' | 'widescreen'>}`

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
  | 'text'
  | 'ghost'

export type FixedPosition = 'top' | 'bottom'

export type States = 'hovered' | 'focused' | 'active' | 'loading'

export type ButtonStyle = 'outlined' | 'inverted' | 'rounded' | 'loading' | 'static'
export type ButtonType = 'submit' | 'reset' | 'button'
export type FixedSize =
  | '16x16'
  | '24x24'
  | '32x32'
  | '48x48'
  | '64x64'
  | '96x96'
  | '128x128'
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
export type GenericSize = 'small' | 'normal' | 'medium' | 'large' | 'fullheight'
export type HeadingSize = IntRange<1, 7>
export type MinimumSize = IntRange<0, 33>
export type NumericSize = IntRange<1, 13>
export type NumericSizes = `${NumericSize}-${BreakpointColumn}`
export type GridNumericSizes = `${NumericSize}-cols-${BreakpointColumn}`
export type RatioSize =
  | 'squared'
  | '1by1'
  | '5by4'
  | '4by3'
  | '3by2'
  | '5by3'
  | '16by9'
  | '2by1'
  | '3by1'
  | '4by5'
  | '3by4'
  | '2by3'
  | '3by5'
  | '9by16'
  | '1by2'
  | '1by3'

export type CellPosition = 'col-start' | 'col-from-end' | 'col-span' | 'row-start' | 'row-from-end' | 'row-span'
export type CellPositions = `${CellPosition}-${NumericSize}`
export type TextPosition = 'left' | 'right' | 'centered' | 'justified'
export type TextPositions = `${TextPosition}-${Breakpoint}`

export interface ILink {
  label: string
  href: string
  external?: boolean
}
