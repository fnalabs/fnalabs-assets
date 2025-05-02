import type { ILink } from '../../types'
import React, { FC } from 'react'
import { Link } from 'react-router'

export interface IMenuLink extends ILink {
  list?: IMenuLink[]
}
export interface IMenuList {
  label: string
  list: IMenuLink[]
}
export interface IMenu {
  /** Nested list of links to render for the Menu. */
  list: IMenuList[]
}

const Menu: FC<IMenu> = ({ list }) => (
  <nav className="menu">
    {list.map(val => (
      <>
        <p className="menu-label">{val.label}</p>
        <ul className="menu-list">
          {val.list.map(link => {
            if (link.list) {
              return (
                <li>
                  <Link to={link.href}>{link.label}</Link>
                  <ul>
                    {link.list.map(nestedLink => (
                      <li>
                        <Link to={nestedLink.href}>{nestedLink.label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            } else {
              return (
                <li>
                  <Link to={link.href}>{link.label}</Link>
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
