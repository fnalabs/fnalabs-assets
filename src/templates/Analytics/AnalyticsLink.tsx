import type { ILink } from '../../types'
import { type FC, type MouseEvent, useContext } from 'react'
import { Link } from 'react-router'
import ReactGA from 'react-ga4'
import Icon from '../../components/Icon/Icon'
import { ConsentContext } from '../../contexts/ConsentContext'

export interface IAnalyticsLink extends ILink {
  external?: boolean
  'aria-label'?: string
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}
const AnalyticsLink: FC<IAnalyticsLink> = ({ label, href, external, onClick = () => {} }) => {
  const consent = useContext(ConsentContext)

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    consent && ReactGA.event({
      category: 'Outbound Link',
      action: 'click',
      label: label,
    })
    onClick(event)
  }

  if (external) {
    return (
      <Link to={href} onClick={handleClick} target='_blank' rel='noopener noreferrer'>
        <span>{label}</span>
        <Icon style='solid' name='arrow-up-right-from-square' size='small' />
      </Link>
    )
  }

  return <Link to={href} onClick={handleClick}>{label}</Link>
}
export default AnalyticsLink
