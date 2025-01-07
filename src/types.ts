import { IntRange } from 'type-fest'

export type Color = 'light' | 'dark'
export type GenericSize = 'small' | 'medium' | 'large' | 'fullheight'
export type NumericSize = IntRange<1, 12>
