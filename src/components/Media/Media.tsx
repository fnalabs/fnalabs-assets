import React, { FC } from 'react'

export interface IMedia {
  /** Image alt text for accessibility support. */
  imgAlt: string
  /** Image source URL for rendering the Media image. */
  imgSrc: string
  /** Subtitle text for the Media experience. */
  subtitle: string
  /** Title text for the Media experience. */
  title: string
}
const Media: FC<IMedia> = ({ imgAlt, imgSrc, subtitle, title }) => {
  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-48x48">
          <img src={imgSrc} alt={imgAlt} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <h2 className="title is-4">{title}</h2>
          <h3 className="subtitle is-6">{subtitle}</h3>
        </div>
      </div>
    </article>
  )
}
export default Media
