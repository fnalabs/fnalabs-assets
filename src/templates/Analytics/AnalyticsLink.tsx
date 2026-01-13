import type { ILink } from '../../types'
import React, { type FC, useContext } from 'react'
import { Link } from 'react-router'
import ReactGA from 'react-ga4'
import { ConsentContext } from '../../contexts/ConsentContext'

export interface IAnalyticsLink extends ILink {
  external?: boolean
  'aria-label'?: string
  onClick?: () => void
}
const AnalyticsLink: FC<IAnalyticsLink> = ({ label, href, external, onClick = () => {}, ...rest }) => {
  const consent = useContext(ConsentContext)

  const handleClick = () => {
    consent && ReactGA.event({
      category: 'Outbound Link',
      action: 'click',
      label: label,
    })
    onClick()
  }

  const linkProps: any = {}
  if (external) {
    linkProps.target = '_blank'
    linkProps.rel = 'noopener noreferrer'
  }

  return <Link to={href} onClick={handleClick} {...linkProps}>{label}</Link>
}
export default AnalyticsLink
