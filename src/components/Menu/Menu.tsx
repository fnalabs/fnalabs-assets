import type { ILink } from '../../types'
import type { FC } from 'react'
import { Link } from 'react-router'
import Icon from '../Icon/Icon'

export interface IMenuLink extends ILink {
  external?: boolean
  list?: IMenuLink[]
}
export interface IMenuList {
  label?: string
  list: IMenuLink[]
}
export interface IMenu {
  /** Nested list of links to render for the Menu. */
  list: IMenuList[]
}

const renderLink = (link: IMenuLink) =>
  link.external
    ? (
        <Link to={link.href} target="_blank" rel="noopener noreferrer">
          {link.label}{" "}
          <Icon style='solid' name='arrow-up-right-from-square' size='small' />
        </Link>
      )
    : (
        <Link to={link.href}>{link.label}</Link>
      )

const Menu: FC<IMenu> = ({ list }) => (
  <nav className="menu mb-6">
    {list.map(val => (
      <>
        {val.label && <p className="menu-label">{val.label}</p>}
        <ul className="menu-list">
          {val.list.map(link => {
            if (link.list) {
              return (
                <li>
                  {renderLink(link)}
                  <ul>
                    {link.list.map(nestedLink => (
                      <li>
                        {renderLink(nestedLink)}
                      </li>
                    ))}
                  </ul>
                </li>
              )
            } else {
              return (
                <li>
                  {renderLink(link)}
                </li>
              )
            }
          })}
        </ul>
      </>
    ))}
  </nav>
)
export default Menu
