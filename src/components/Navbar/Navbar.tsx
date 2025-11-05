import type { Color, ILink } from '../../types'
import React, { FC } from 'react'
import { Link } from 'react-router'
import Container from '../Container/Container'

export interface IBrandLink extends ILink {
  icon: string
}
export interface INavbar {
  brand: IBrandLink
  color?: Color
  spaced?: boolean
  shaded?: boolean
}
const Navbar: FC<INavbar> = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <Container>
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" />
        </div>
      </Container>
    </nav>
  )
}
export default Navbar
