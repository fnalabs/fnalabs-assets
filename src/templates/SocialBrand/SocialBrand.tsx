import type { ILink } from '../../types'
import React, { type FC } from 'react'
import { Link } from 'react-router'

import Grid from '../../components/Grid/Grid'
import Cell from '../../components/Grid/Cell'
import Level from '../../components/Level/Level'
import Icon, { type IIcon } from '../../components/Icon/Icon'
import * as Icons from '../../components/Icon'

export interface ISocialLink extends ILink {
  name: IIcon['name']
  style: IIcon['style']
}
export interface ISocialBrand {
  brandIcon: keyof typeof Icons
  brandSlogan?: string
  socialLinks?: ISocialLink[]
}
const SocialBrand: FC<ISocialBrand> = ({ brandIcon, brandSlogan, socialLinks }) => {
  const BrandIcon = Icons[brandIcon]
  socialLinks?.map(link => ({
    content: (
      <Link to={link.href} target='_blank' rel='noopener noreferrer' className='has-text-inherit'>
        <Icon style={link.style} name={link.name} size='large' />
      </Link>
    )
  }))

  return (
    <>
      {socialLinks && <Level mobile nav items={socialLinks?.map(link => ({
        content: (
          <Link to={link.href} target='_blank' rel='noopener noreferrer' className='has-text-inherit'>
            <Icon style={link.style} name={link.name} size='large' />
          </Link>
        )
      }))} />}

      <Grid>
        <Cell><BrandIcon /></Cell>
        {brandSlogan && <Cell><p>{brandSlogan}</p></Cell>}
      </Grid>
    </>
  )
}
export default SocialBrand
