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
  /** The icon representing the social brand. */
  brandIcon: keyof typeof Icons
  /** Optional slogan for the social brand. */
  brandSlogan?: string
  /**
   * Optional list of social links to render.<br />
   * <code>ISocialLink</code>
   * <pre>
   * interface ISocialLink extends ILink {
   *   name: IIcon['name']
   *   style: IIcon['style']
   * }
   * </pre>
   * <code>ILink</code>
   * <pre>
   * interface ILink {
   *   label: string
   *   href: string
   *   external?: boolean
   *   'aria-label'?: string
   * }
   * </pre>
   */
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
