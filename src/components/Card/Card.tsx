import React, { type FC, type ReactNode } from 'react'

export interface ICard {
  /** Main content for the Card. */
  children: ReactNode
  /** Optional header content for the Card. */
  header?: ReactNode
  /** Optional Footer content for the Card. */
  footer?: ReactNode
  /** Optional Image content for the Card. */
  image?: ReactNode
  /** Optional Title for the Card. */
  title?: string
}
const Card: FC<ICard> = ({ children, header, footer, image }) => (
  <section className='card'>
    {header && <header className='card-header'>{header}</header>}

    {image && <div className="card-image">{image}</div>}

    <div className="card-content">{children}</div>

    {footer && <footer className="card-footer">{footer}</footer>}
  </section>
)
export default Card
