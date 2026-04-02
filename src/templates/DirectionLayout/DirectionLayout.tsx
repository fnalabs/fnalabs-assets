import type { ILink, Color } from '../../types'

import React, { type FC } from 'react'
import { Link, Outlet } from 'react-router'

import Hero from '../../components/Hero/Hero'
import Icon from '../../components/Icon/Icon'
import Level, { type ILevelItem } from '../../components/Level/Level'

export interface IDirectionLayout {
  links: {
    next?: ILink
    prev?: ILink
    up?: ILink
  }
  color: Exclude<Color, 'text' | 'ghost'>
}
const DirectionLayout: FC<IDirectionLayout> = ({ links, color }) => {
  const renderLinks: ILevelItem[] = []

  if (links.prev) renderLinks.push({
    content: (
      <Link to={links.prev.href} aria-label={links.prev.label} className='has-text-inherit'>
        <Icon size='large' style='solid' name='angles-left' />
      </Link>
    )
  })
  if (links.up) renderLinks.push({
    content: (
      <Link to={links.up.href} aria-label={links.up.label} className='has-text-inherit'>
        <Icon size='large' style='solid' name='angles-up' />
      </Link>
    )
  })
  if (links.next) renderLinks.push({
    content: (
      <Link to={links.next.href} aria-label={links.next.label} className='has-text-inherit'>
        <Icon size='large' style='solid' name='angles-right' />
      </Link>
    )
  })

  return (
  <>
    <Outlet />
    <Hero size='small' color={color}>
      <Level mobile nav items={renderLinks} />
    </Hero>
  </>
)}
export default DirectionLayout
