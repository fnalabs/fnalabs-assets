import type { ILink } from '../../types'
import React, { type FC } from 'react'

import Button from '../../components/Button/Button'
import Cell from '../../components/Grid/Cell'
import Grid from '../../components/Grid/Grid'
import Icon, { type IIcon } from '../../components/Icon/Icon'
import * as Icons from '../../components/Icon'
import Level from '../../components/Level/Level'

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

  return (
    <div className='has-text-centered'>
      {socialLinks && <Level mobile nav items={socialLinks?.map(link => ({
        content: (
          <Button href={link.href} color='text' size='medium' label={link.label} external>
            <Icon style={link.style} name={link.name} size='medium' />
          </Button>
        )
      }))} />}

      <Grid>
        <Cell><BrandIcon /></Cell>
        {brandSlogan && <Cell><p>{brandSlogan}</p></Cell>}
      </Grid>
    </div>
  )
}
export default SocialBrand
