import React, { FC } from 'react'
import { Outlet } from 'react-router'
import Navbar, { INavbar } from '../../components/Navbar/Navbar'

export interface IAppLayout extends INavbar {}
const AppLayout: FC<IAppLayout> = ({ startLinks, endLinks, color, fixed, spaced, shaded }) => {
  return (
    <>
      <Navbar startLinks={startLinks} endLinks={endLinks} color={color} fixed={fixed} spaced={spaced} shaded={shaded} />
      <Outlet />
    </>
  )
}
export default AppLayout
