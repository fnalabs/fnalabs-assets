import type { ILink } from '../../types'
import React, { FC } from 'react'
import { Link, Outlet, ScrollRestoration } from 'react-router'

import Container from '../../components/Container/Container'
import Columns from '../../components/Columns/Columns'
import Column from '../../components/Columns/Column'
import Footer from '../../components/Footer/Footer'

import SocialBrand, { type ISocialBrand } from '../SocialBrand/SocialBrand'

export interface IGlobalLayout extends ISocialBrand {
  pageLinks: ILink[]
  policyLinks: ILink[]
}
const GlobalLayout: FC<IGlobalLayout> = ({ pageLinks, policyLinks, brandIcon, brandSlogan, socialLinks }) => {
  return (
    <>
      <div className='section is-fullheight p-0'>
        <Outlet />
      </div>
      <Footer>
        <Container content>
          <Columns>
            <Column narrow textPosition='centered-touch'>
              <p>Copyright &copy; FnA Labs</p>
              <p className='is-size-7'>Icons from <Link to='https://fontawesome.com/' target='_blank' rel='noopener noreferrer' className='has-text-inherit'>Font Awesome</Link> (<Link to='https://fontawesome.com/license/free' target='_blank' rel='noopener noreferrer' className='has-text-inherit'>License</Link>)</p>
              <p>
                <Link to='https://bulma.io' target='_blank' rel='noopener noreferrer'>
                  <img src='https://bulma.io/assets/images/made-with-bulma--dark.png' alt='Made with Bulma' width='128' height='24'/>
                </Link>
              </p>
            </Column>

            <Column>
              <Columns mobile>
                <Column numericSize={6} textPosition='right'>
                  {pageLinks.map(link => (
                    <p key={link.label}>
                      <Link to={link.href} className='has-text-inherit'>{link.label}</Link>
                    </p>
                  ))}
                </Column>

                <Column numericSize={6} textPosition='left'>
                  {policyLinks.map(link => (
                    <p key={link.label}>
                      <Link to={link.href} className='has-text-inherit'>{link.label}</Link>
                    </p>
                  ))}
                </Column>
              </Columns>
            </Column>

            <Column narrow>
              <SocialBrand brandIcon={brandIcon} brandSlogan={brandSlogan} socialLinks={socialLinks} />
            </Column>
          </Columns>
        </Container>
      </Footer>
      <ScrollRestoration />
    </>
  )
}
export default GlobalLayout
