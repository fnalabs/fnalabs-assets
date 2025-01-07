import React, { FC, ReactNode } from 'react'

export interface ICard {
  /** Main content for the Card. */
  children: ReactNode
  /** Optional className to add to the Card. */
  className?: string
  /** Optional Footer content for the Card. */
  footer?: ReactNode
  /** Optional Image content for the Card. */
  image?: ReactNode
  /** Optional Title for the Card. */
  title?: string
}
const Card: FC<ICard> = ({ children, className, footer, image, title }) => (
  <section className={`card${className ? ` ${className}` : ''}`}>
    {!!image && (
      <div className="card-image">
        <figure className="image is-96x96 has-text-centered">{image}</figure>
      </div>
    )}
    <div className="card-content">
      <div className="content">
        {!!title && <h3 className="has-text-centered">{title}</h3>}
        {children}
      </div>
    </div>
    {!!footer && <div className="card-footer">{footer}</div>}
  </section>
)
export default Card
