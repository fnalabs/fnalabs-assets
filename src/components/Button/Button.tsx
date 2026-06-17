import type { ButtonStyle, ButtonType, Color, GenericSize } from '../../types'
import React, { type FC, type ReactNode } from 'react'
import { Link } from 'react-router'
import ReactGA from 'react-ga4'
import Icon from '../Icon/Icon'
import { ConsentContext } from '../../contexts/ConsentContext'

export interface IButton {
  children: ReactNode
  onClick?: () => void
  href?: string
  label?: string
  color?: Color
  colorMode?: 'light' | 'dark'
  size?: Exclude<GenericSize, 'fullheight'>
  style?: ButtonStyle
  type?: ButtonType
  beforeIcon?: string
  afterIcon?: string
  disabled?: boolean
  external?: boolean
  fullWidth?: boolean
}

const Button: FC<IButton> = ({
  children,
  onClick = () => {},
  href,
  label,
  color,
  colorMode,
  size,
  style,
  type = 'button',
  beforeIcon,
  afterIcon,
  disabled,
  external,
  fullWidth,
}) => {
  const consent = React.useContext(ConsentContext)
  const colorClass = color ? ` is-${color}` : ''
  const colorModeClass = colorMode ? ` is-${colorMode}` : ''
  const sizeClass = size ? ` is-${size}` : ''
  const styleClass = style ? ` is-${style}` : ''
  const fullWidthClass = fullWidth ? ' is-fullwidth' : ''
  const combinedClasses = `button${colorClass}${colorModeClass}${sizeClass}${styleClass}${fullWidthClass}`

  if (href) {
    const handleClick = () => {
      consent && external && ReactGA.event({
        category: 'Outbound Link',
        action: 'click',
        label: href,
      })
      onClick()
    }

    const linkProps: any = {}
    if (external) {
      linkProps.target = '_blank'
      linkProps.rel = 'noopener noreferrer'
    }
    if (disabled) linkProps['aria-disabled'] = 'true'
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
