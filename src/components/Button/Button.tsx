import type { ButtonStyle, ButtonType, Color, GenericSize, States } from '../../types'
import { type FC, type ReactNode, type MouseEvent, useContext } from 'react'
import { Link } from 'react-router'
import ReactGA from 'react-ga4'
import Icon from '../Icon/Icon'
import { ConsentContext } from '../../contexts/ConsentContext'

export interface IButton {
  /** Child content to render in the Button. */
  children: ReactNode
  /** Optional click handler for the Button. */
  onClick?: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
  /** Optional href for the Button to render as a link. */
  href?: string
  /** Optional label for the Button to provide additional context for screen readers. */
  label?: string
  /** Optional color for the Button. */
  color?: Color
  /** Optional color mode for the Button. */
  colorMode?: 'light' | 'dark'
  /** Optional selected state for the Button. */
  selected?: boolean
  /** Optional size for the Button. */
  size?: Exclude<GenericSize, 'fullheight'>
  /** Optional state for the Button. */
  state?: States
  /** Optional style for the Button. */
  style?: ButtonStyle
  /** Optional type for the Button. */
  type?: ButtonType
  /** Optional icon to render before the Button content. */
  beforeIcon?: string
  /** Optional icon to render after the Button content. */
  afterIcon?: string
  /** Optional disabled state for the Button. */
  disabled?: boolean
  /** Optional external link state for the Button. */
  external?: boolean
  /** Optional full width state for the Button. */
  fullWidth?: boolean
}

const Button: FC<IButton> = ({
  children,
  onClick = (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {},
  href,
  label,
  color,
  colorMode,
  selected,
  size,
  state,
  style,
  type = 'button',
  beforeIcon,
  afterIcon,
  disabled,
  external,
  fullWidth,
}) => {
  const consent = useContext(ConsentContext)

  const colorClass = color ? ` is-${color}` : ''
  const colorModeClass = colorMode ? ` is-${colorMode}` : ''
  const selectedClass = selected ? ' is-selected' : ''
  const sizeClass = size ? ` is-${size}` : ''
  const stateClass = state ? ` is-${state}` : ''
  const styleClass = style ? ` is-${style}` : ''
  const fullWidthClass = fullWidth ? ' is-fullwidth' : ''
  const combinedClasses = `button${colorClass}${colorModeClass}${selectedClass}${sizeClass}${stateClass}${styleClass}${fullWidthClass}`

  if (href) {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      consent && external && ReactGA.event({
        category: 'Outbound Link',
        action: 'click',
        label: href,
      })

      if (disabled) event?.preventDefault()
      else onClick(event)
    }

    const linkProps: any = {}
    if (external) {
      linkProps.target = '_blank'
      linkProps.rel = 'noopener noreferrer'

      afterIcon = afterIcon || 'arrow-up-right-from-square'
    }
    if (disabled) {
      linkProps['aria-disabled'] = 'true'
      linkProps.disabled = true
    }
    if (label) linkProps['aria-label'] = label

    return (
      <Link to={href} className={combinedClasses} onClick={handleClick} {...linkProps}>
        {beforeIcon && <Icon style='solid' name={beforeIcon} size='small' />}
        <span>{children}</span>
        {afterIcon && <Icon style='solid' name={afterIcon} size='small' />}
      </Link>
    )
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick} disabled={disabled}>
      {beforeIcon && <Icon style='solid' name={beforeIcon} size='small' />}
      <span>{children}</span>
      {afterIcon && <Icon style='solid' name={afterIcon} size='small' />}
    </button>
  )
}
export default Button
