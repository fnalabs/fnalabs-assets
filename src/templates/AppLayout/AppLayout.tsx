import type { FC } from 'react'
import { Outlet } from 'react-router'
import Navbar, { INavbar } from '../../components/Navbar/Navbar'

export interface IAppLayout extends INavbar {}
const AppLayout: FC<IAppLayout> = (props) => {
  return (
    <>
      <Navbar {...props} />
      <main>
        <Outlet />
      </main>
    </>
  )
}
export default AppLayout
