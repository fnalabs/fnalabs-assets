import React, { FC } from 'react'
import { Outlet } from 'react-router'
import Footer, { IFooter } from '../../components/Footer/Footer'

export interface IGlobalLayout extends IFooter {}
const GlobalLayout: FC<IGlobalLayout> = ({ projectLinks, policyLinks }) => {
  return (
    <>
      <div className='section is-fullheight p-0'>
        <Outlet />
      </div>
      <Footer projectLinks={projectLinks} policyLinks={policyLinks} />
    </>
  )
}
export default GlobalLayout
