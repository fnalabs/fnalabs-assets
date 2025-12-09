import React, { type FC, type ReactNode } from 'react'
import Icon from '../Icon/Icon'

export interface IMedia {
  /** Content for the main Media experience. */
  children: ReactNode
  /** Image alt text for accessibility support. */
  imgAlt?: string
  /** Optional Image source URL for rendering the Media image. */
  imgSrc?: string
}
const Media: FC<IMedia> = ({ children, imgAlt, imgSrc }) => {
  return (
    <article className="media">
      <figure className="media-left">
        {imgSrc
          ? <p className="image is-48x48"><img src={imgSrc} alt={imgAlt} /></p>
          : <Icon size='large' style='solid' name='user' />}
      </figure>
      <div className="media-content">
        {children}
      </div>
    </article>
  )
}
export default Media
