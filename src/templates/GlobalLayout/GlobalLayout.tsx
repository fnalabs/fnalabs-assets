import type { ILink } from '../../types'
import React, { FC } from 'react'
import { Outlet, ScrollRestoration } from 'react-router'

import { Link } from 'react-router'

import Cell from '../../components/Grid/Cell'
import Container from '../../components/Container/Container'
import Columns from '../../components/Columns/Columns'
import Column from '../../components/Columns/Column'
import Footer from '../../components/Footer/Footer'
import Grid from '../../components/Grid/Grid'
import Icon from '../../components/Icon/Icon'
import { FnALabsInverted } from '../../components/Icon'
import Level from '../../components/Level/Level'

export interface IGlobalLayout {
  pageLinks: ILink[]
  policyLinks: ILink[]
}
const GlobalLayout: FC<IGlobalLayout> = ({ pageLinks, policyLinks }) => {
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
              <p className='is-size-7'>Icons from <a href='https://fontawesome.com/' target='_blank' rel='noopener noreferrer' className='has-text-inherit'>Font Awesome</a> (<a href='https://fontawesome.com/license' target='_blank' rel='noopener noreferrer' className='has-text-inherit'>License</a>)</p>
              <p>
                <a href='https://bulma.io' target='_blank' rel='noopener noreferrer'>
                  <img src='https://bulma.io/assets/images/made-with-bulma--dark.png' alt='Made with Bulma' width='128' height='24'/>
                </a>
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

            <Column narrow textPosition='centered'>
              <Level mobile items={[
                { content: (<a className='has-text-inherit'><Icon style='brands' name='github' size='large' /></a>) },
                { content: (<a className='has-text-inherit'><Icon style='brands' name='npm' size='large' /></a>) },
                { content: (<a className='has-text-inherit'><Icon style='regular' name='envelope' size='large' /></a>) },
              ]} />

              <Grid>
                <Cell><FnALabsInverted /></Cell>
                <Cell><p>Fn Awesome!</p></Cell>
              </Grid>
            </Column>
          </Columns>
        </Container>
      </Footer>
      <ScrollRestoration />
    </>
  )
}
export default GlobalLayout
