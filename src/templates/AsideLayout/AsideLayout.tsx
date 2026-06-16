import type { IMenuList, IMenuLink } from '../../components/Menu/Menu'

import React, { type FC } from 'react'
import { NavLink, Outlet } from 'react-router'

import Column from '../../components/Columns/Column'
import Columns from '../../components/Columns/Columns'
import Container from '../../components/Container/Container'
import Icon from '../../components/Icon/Icon'

const isActiveClass = ({ isActive, isPending }: { isActive: boolean, isPending: boolean }) =>  isPending
    ? "is-active"
    : isActive
      ? "is-active"
      : ""

const renderNavLink = (link: IMenuLink) =>
  link.external
    ? (
        <NavLink to={link.href} className={isActiveClass} target="_blank" rel="noopener noreferrer">
          {link.label}{" "}
          <Icon style='solid' name='arrow-up-right-from-square' size='small' />
        </NavLink>
      )
    : (
        <NavLink to={link.href} className={isActiveClass}>
          {link.label}
        </NavLink>
      )

export interface IAsideLayout {
  list: IMenuList[]
}
const AsideLayout: FC<IAsideLayout> = ({ list }) => (
  <div className='section'>
    <Container>
      <Columns gapSize={8}>
        <aside className='column is-narrow is-hidden-touch'>
          <nav className="menu mb-6">
            {list.map(val => (
              <>
                {val.label && <p className="menu-label">{val.label}</p>}
                <ul className="menu-list">
                  {val.list.map(link => {
                    if (link.list) {
                      return (
                        <li>
                          {renderNavLink(link)}
                          <ul>
                            {link.list.map(nestedLink => (
                              <li>
                                {renderNavLink(nestedLink)}
                              </li>
                            ))}
                          </ul>
                        </li>
                      )
                    } else {
                      return (
                        <li>
                          {renderNavLink(link)}
                        </li>
                      )
                    }
                  })}
                </ul>
              </>
            ))}
          </nav>
        </aside>
        <Column>
          <Outlet />
        </Column>
      </Columns>
    </Container>
  </div>
)
export default AsideLayout
