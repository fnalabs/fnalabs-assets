import type { ButtonStyle, Color, FixedPosition, ILink } from '../../types'
import { type FC, useState } from 'react'
import { Link, NavLink } from 'react-router'
import Button from '../Button/Button'
import Buttons from '../Button/Buttons'
import Container from '../Container/Container'
import * as Icons from '../Icon'

export interface INavLink extends ILink {
  list?: INavLink[]
  button?: boolean
  color?: Color
  divider?: boolean
  beforeIcon?: string
  afterIcon?: string
  style?: ButtonStyle
}

export interface IBrandLink extends ILink {
  brandIcon: keyof typeof Icons
}

export const renderLink = (link: INavLink) => {
  if (link.button) {
    return <Button href={link.href} color={link.color} style={link.style} beforeIcon={link.beforeIcon} afterIcon={link.afterIcon}>{link.label}</Button>
  }

  return (
    <NavLink key={link.label} to={link.href} className={({ isActive, isPending }) =>
        isPending ? "navbar-item is-selected" : isActive ? "navbar-item is-active" : "navbar-item"
      }
    >{link.label}</NavLink>
  )
}
export const mapLinks = (link: INavLink) => {
  switch (true) {
    case !!link.list:
      return (
        <div key={link.label} className="navbar-item has-dropdown is-hoverable">
          <NavLink key={link.label} to={link.href} className={({ isActive, isPending }) =>
              isPending ? "navbar-link is-selected" : isActive ? "navbar-link is-active" : "navbar-link"
          }>{link.label}</NavLink>
          <div className="navbar-dropdown is-boxed">
            {link.list.map(mapLinks)}
          </div>
        </div>
      )
    case link.divider:
      return (
        <>
          {renderLink(link)}
          <hr key={`${link.label}-divider`} className="navbar-divider" />
        </>
      )
    default:
      return renderLink(link)
  }
}

export interface INavbar {
  /**
   * Brand links for the Navbar, including the brand icon and href. The first link is the primary brand, and the second link is an optional sub-brand.
   * <pre>
   * interface IBrandLink extends ILink {
   *   brandIcon: keyof typeof Icons
   * }
   * </pre>
   */
  brandLink: IBrandLink[]
  /**
   * Optional start links for the Navbar, which can include dropdowns, buttons, and dividers. Each link is an object that can have the following properties:
   * <pre>
   * interface INavLink extends ILink {
   *   list?: INavLink[]
   *   button?: boolean
   *   color?: Color
   *   divider?: boolean
   *   beforeIcon?: string
   *   afterIcon?: string
   *   style?: ButtonStyle
   * }
   * </pre>
   */
  startLinks?: INavLink[]
  /**
   * Optional end links for the Navbar, which can include dropdowns, buttons, and dividers. Each link is an object that can have the following properties:
   * <pre>
   * interface INavLink extends ILink {
   *   list?: INavLink[]
   *   button?: boolean
   *   color?: Color
   *   divider?: boolean
   *   beforeIcon?: string
   *   afterIcon?: string
   *   style?: ButtonStyle
   * }
   * </pre>
   */
  endLinks?: INavLink[]
  /** Optional background color for the Navbar. */
  color?: Exclude<Color, 'text' | 'ghost'>
  /** Optional fixed position for the Navbar. */
  fixed?: FixedPosition
  /** Optional spaced variant for the Navbar. */
  spaced?: boolean
  /** Optional shaded variant for the Navbar. */
  shaded?: boolean
}
const Navbar: FC<INavbar> = ({ brandLink, startLinks, endLinks, color, fixed, spaced, shaded }) => {
  const [closed, setClosed] = useState(true)

  const colorClass = color ? ` is-${color}` : ''
  const fixedClass = fixed ? ` is-fixed-${fixed}` : ''
  const spacedClass = spaced ? ' is-spaced' : ''
  const shadedClass = shaded ? ' has-shadow' : ''

  const BrandIcon = Icons[brandLink[0].brandIcon]
  const SubBrandIcon = brandLink[1] ? Icons[brandLink[1].brandIcon] : () => null

  return (
    <nav className={`navbar${colorClass}${fixedClass}${spacedClass}${shadedClass}`} role="navigation" aria-label="main navigation">
      <Container>
        <div className="navbar-brand">
          <Link to={brandLink[0].href} aria-label={brandLink[0].label} className="navbar-item">
            <span className="icon is-large">
              <BrandIcon />
            </span>
          </Link>

          {brandLink[1] && (
            <>
              <span className='is-size-2'>|</span>
              <Link to={brandLink[1].href} aria-label={brandLink[1].label} className="navbar-item">
                <span className="icon is-large">
                  <SubBrandIcon />
                </span>
              </Link>
            </>
          )}

          <a role="button" className={`navbar-burger has-text-inherit${closed ? '' : ' is-active'}`} aria-label="menu" aria-expanded="false" data-target="navbar" onClick={() => setClosed(!closed)}>
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
            {endLinks?.some(link => link.button)
              ? <div className="navbar-item">
                  <Buttons>{endLinks?.map(mapLinks)}</Buttons>
                </div>
              : endLinks?.map(mapLinks)}
          </div>
        </div>
      </Container>
    </nav>
  )
}
export default Navbar
