import type { IMenuList } from '../../components/Menu/Menu'

import React, { type FC } from 'react'
import { NavLink, Outlet } from 'react-router'

import Column from '../../components/Columns/Column'
import Columns from '../../components/Columns/Columns'
import Container from '../../components/Container/Container'

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
                          <NavLink
                            to={link.href}
                            className={({ isActive, isPending }) =>
                              isPending
                                ? "is-active"
                                : isActive
                                  ? "is-active"
                                  : ""
                          }>{link.label}</NavLink>
                          <ul>
                            {link.list.map(nestedLink => (
                              <li>
                                <NavLink
                                  to={nestedLink.href}
                                  className={({ isActive, isPending }) =>
                                    isPending
                                      ? "is-active"
                                      : isActive
                                        ? "is-active"
                                        : ""
                                }>{nestedLink.label}</NavLink>
                              </li>
                            ))}
                          </ul>
                        </li>
                      )
                    } else {
                      return (
                        <li>
                          <NavLink
                            to={link.href}
                            className={({ isActive, isPending }) =>
                              isPending
                                ? "is-active"
                                : isActive
                                  ? "is-active"
                                  : ""
                          }>{link.label}</NavLink>
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
