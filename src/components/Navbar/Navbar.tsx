import type { ButtonStyle, Color, FixedPosition, ILink } from '../../types'
import React, { FC, useState } from 'react'
import { Link, NavLink } from 'react-router'
import * as Icons from '../Icon'

export interface INavLink extends ILink {
  list?: INavLink[]
  button?: boolean
  color?: Color
  divider?: boolean
  style?: ButtonStyle
}

export interface IBrandLink extends ILink {
  brandIcon: keyof typeof Icons
}

export const renderLink = (link: INavLink) => {
  if (link.button) {
    const colorClass = link.color ? ` is-${link.color}` : ''
    const styleClass = link.style ? ` is-${link.style}` : ''

    return (
      <Link className={`button${colorClass}${styleClass}`} to={link.href} key={link.label}>
        {link.label}
      </Link>
    )
  }
  return (
    <NavLink key={link.label} to={link.href} className={({ isActive, isPending }) =>
        isPending ? "navbar-item is-selected" : isActive ? "navbar-item is-active" : "navbar-item"
      }
    >{link.label}</NavLink>
  )
}
export const mapLinks = (link: INavLink) => {
  if (link.list?.length) {
    return (
      <div key={link.label} className="navbar-item has-dropdown is-hoverable">
        <NavLink key={link.label} to={link.href} className={({ isActive, isPending }) =>
            isPending ? "navbar-link is-selected" : isActive ? "navbar-link is-active" : "navbar-link"
          }
        >{link.label}</NavLink>
        <div className="navbar-dropdown is-boxed">
          {link.list.map(mapLinks)}
        </div>
      </div>
    )
  } else if (link.divider) {
    return (
      <>
        {renderLink(link)}
        <hr key={`${link.label}-divider`} className="navbar-divider" />
      </>
    )
  } else {
    return renderLink(link)
  }
}

export interface INavbar {
  brandLink?: IBrandLink
  startLinks?: INavLink[]
  endLinks?: INavLink[]
  color?: Color
  fixed?: FixedPosition
  spaced?: boolean
  shaded?: boolean
}
const Navbar: FC<INavbar> = ({ brandLink, startLinks, endLinks, color, fixed, spaced, shaded }) => {
  const [closed, setClosed] = useState(true)

  const colorClass = color ? ` is-${color}` : ''
  const fixedClass = fixed ? ` is-fixed-${fixed}` : ''
  const spacedClass = spaced ? ' is-spaced' : ''
  const shadedClass = shaded ? ' has-shadow' : ''

  const BrandIcon = brandLink ? Icons[brandLink.brandIcon] : Icons.Box

  return (
    <nav className={`navbar${colorClass}${fixedClass}${spacedClass}${shadedClass}`} role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to='/' className="navbar-item">
          <span className="icon is-large">
            <Icons.FnALabsInverted />
          </span>
        </Link>

        {brandLink && (
          <>
            <span className='is-size-2'>|</span>
            <Link to={brandLink.href} className="navbar-item">
              <span className="icon is-large">
                <BrandIcon />
              </span>
            </Link>
          </>
        )}

        <a role="button" className={`navbar-burger${closed ? '' : ' is-active'}`} aria-label="menu" aria-expanded="false" data-target="navbar" onClick={() => setClosed(!closed)}>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbar" className={`navbar-menu${closed ? '' : ' is-active'}`}>
        <div className="navbar-start">
          {startLinks?.map(mapLinks)}
        </div>

        <div className="navbar-end">
          {endLinks?.length && !endLinks[0]?.button
            ? endLinks?.map(mapLinks)
            : (
              <div className="navbar-item">
                <div className="buttons">
                  {endLinks?.map(mapLinks)}
                </div>
              </div>
            )}
        </div>
      </div>
    </nav>
  )
}
export default Navbar
